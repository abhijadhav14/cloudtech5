import https from 'https';
import { URLSearchParams } from 'url';

// Send WhatsApp message via Twilio
async function sendWhatsAppMessage(phone, name) {
  try {
    if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_WHATSAPP_NUMBER) {
      console.log('Twilio not configured, skipping WhatsApp');
      return;
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER;
    
    // Normalize phone number - add +91 if not present and is Indian number
    let normalizedPhone = phone.replace(/\D/g, ''); // Remove all non-digits
    if (!normalizedPhone.startsWith('91')) {
      normalizedPhone = '91' + normalizedPhone;
    }
    if (!normalizedPhone.startsWith('+')) {
      normalizedPhone = '+' + normalizedPhone;
    }
    
    const toNumber = `whatsapp:${normalizedPhone}`;
    const companyPdfUrl = process.env.COMPANY_PDF_URL || 'https://www.cloudtechnologysolutions.in/company-info.html';
    
    const messageBody = `Hello ${name}! 👋\n\nThank you for your interest in Cloud Technology Solutions!\n\n📚 Here's our company information and programs:\n${companyPdfUrl}\n\nOur career counselor will contact you within 24 hours to discuss your learning path.\n\n📞 For immediate assistance:\n${process.env.COMPANY_CONTACT || 'Visit: https://www.cloudtechnologysolutions.in'}\n\nBest regards,\nCloud Technology Solutions Team ☁️`;

    const postData = new URLSearchParams();
    postData.append('From', fromNumber);
    postData.append('To', toNumber);
    postData.append('Body', messageBody);
    
    const postDataString = postData.toString();
    
    console.log(`📱 Sending WhatsApp to ${toNumber} from ${fromNumber}`);

    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.twilio.com',
        path: `/2010-04-01/Accounts/${accountSid}/Messages.json`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postDataString),
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64')
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          if (res.statusCode === 201 || res.statusCode === 200) {
            console.log('✅ WhatsApp message sent successfully');
            resolve();
          } else {
            console.error(`❌ WhatsApp API error (${res.statusCode}):`, data);
            reject(new Error(`WhatsApp failed: ${res.statusCode} - ${data}`));
          }
        });
      });

      req.on('error', (error) => {
        console.error('❌ WhatsApp request error:', error.message);
        reject(error);
      });
      
      req.write(postDataString);
      req.end();
    });
  } catch (error) {
    console.error('❌ Error sending WhatsApp:', error.message);
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
    
    console.log('Received form submission:', { name, email, phone, program });
    
    // Validate required fields
    if (!name || !email || !phone) {
      console.log('Validation failed: missing required fields');
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

    // Try to send WhatsApp message (non-blocking)
    try {
      await sendWhatsAppMessage(phone, name);
    } catch (whatsappError) {
      console.warn('⚠️ WhatsApp message failed:', whatsappError.message);
      // Don't fail the form submission if WhatsApp fails
    }

    console.log('✅ Form submission successful');
    
    // Always return success if validation passed
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
      data: formDataToSave
    });
  } catch (error) {
    console.error('❌ Error submitting form:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting form. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
