import { google } from 'googleapis';
import twilio from 'twilio';

// Google Sheets helper
async function saveToGoogleSheets(formData) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_JSON || !process.env.GOOGLE_SPREADSHEET_ID) {
      console.log('Google Sheets not configured, skipping');
      return;
    }

    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    const values = [[
      new Date().toLocaleString(),
      formData.name,
      formData.email,
      formData.phone,
      formData.program,
      formData.graduation || '',
      formData.passoutYear || '',
      formData.experienceLevel || 'fresher',
      formData.yearsOfExperience || '',
      formData.currentCompany || '',
      formData.message || '',
      'New'
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Leads!A:L',
      valueInputOption: 'USER_ENTERED',
      resource: { values },
    });

    console.log('✅ Saved to Google Sheets');
  } catch (error) {
    console.error('Google Sheets error:', error.message);
    throw error;
  }
}

// WhatsApp helper
async function sendWhatsApp(phone, name) {
  try {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
      console.log('Twilio not configured, skipping WhatsApp');
      return;
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const message = `Hello ${name}! 👋\n\nThank you for your interest in Cloud Technology Solutions!\n\nOur career counselor will contact you within 24 hours to discuss your learning path.\n\nMeanwhile, feel free to explore our programs at https://www.cloudtechnologysolutions.in\n\n📞 Need immediate assistance? Call us at ${process.env.COMPANY_WHATSAPP_NUMBER || '+91-XXXXXXXXXX'}\n\nBest regards,\nCloud Technology Solutions Team`;

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${phone}`,
      body: message,
    });

    console.log('✅ WhatsApp sent');
  } catch (error) {
    console.error('WhatsApp error:', error.message);
    throw error;
  }
}

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      program,
      graduation,
      passoutYear,
      experienceLevel,
      yearsOfExperience,
      currentCompany,
      message
    } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required'
      });
    }

    // Prepare form data
    const formDataToSave = {
      name,
      email,
      phone,
      program: program || 'Not specified',
      graduation: graduation || 'Not specified',
      passoutYear: passoutYear || '',
      experienceLevel: experienceLevel || 'fresher',
      yearsOfExperience: yearsOfExperience || '',
      currentCompany: currentCompany || '',
      message: message || '',
      timestamp: new Date().toISOString()
    };

    // Try to save to Google Sheets (non-blocking)
    try {
      await saveToGoogleSheets(formDataToSave);
    } catch (gsError) {
      console.warn('⚠️ Google Sheets save failed:', gsError.message);
    }
    
    // Try to send WhatsApp message (non-blocking)
    try {
      await sendWhatsApp(phone, name);
    } catch (whatsappError) {
      console.warn('⚠️ WhatsApp message failed:', whatsappError.message);
    }
    
    // Always return success if validation passed
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
      data: formDataToSave
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting form. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
