import { saveFormDataToExcel } from '../../server/utils/excelUtils.js';
import { sendConfirmationMessage } from '../../server/utils/whatsappUtils.js';
import { saveFormDataToGoogleSheets } from '../../server/utils/googleSheetsUtils.js';

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

    // Validate experience fields if experienced
    if (experienceLevel === 'experienced' && (!yearsOfExperience || !currentCompany)) {
      return res.status(400).json({
        success: false,
        message: 'Years of experience and current company are required for experienced candidates'
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
      message: message || ''
    };

    // Save to Excel
    await saveFormDataToExcel(formDataToSave);

    // Save to Google Sheets (if configured)
    try {
      await saveFormDataToGoogleSheets(formDataToSave);
    } catch (gsError) {
      console.warn('⚠️ Google Sheets save failed but Excel saved:', gsError.message);
    }
    
    // Send WhatsApp message
    try {
      await sendConfirmationMessage(phone, name);
    } catch (whatsappError) {
      console.warn('⚠️ WhatsApp message failed but form was saved:', whatsappError.message);
      // Don't fail the entire request if WhatsApp fails
    }
    
    res.json({
      success: true,
      message: 'Form submitted successfully! You will receive a WhatsApp message shortly.',
      data: formDataToSave
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting form',
      error: error.message
    });
  }
}
