import express from 'express';
import { saveFormDataToExcel, getAllLeads } from '../utils/excelUtils.js';
import { sendConfirmationMessage } from '../utils/whatsappUtils.js';
import { saveFormDataToGoogleSheets, getAllLeadsFromGoogleSheets } from '../utils/googleSheetsUtils.js';

const router = express.Router();

// Submit form
router.post('/submit', async (req, res) => {
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
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get all leads (protected endpoint - add authentication in production)
router.get('/leads', async (req, res) => {
  try {
    // Try Google Sheets first
    const gsLeads = await getAllLeadsFromGoogleSheets();
    
    if (gsLeads && gsLeads.length > 0) {
      return res.json({
        success: true,
        source: 'google-sheets',
        count: gsLeads.length,
        leads: gsLeads
      });
    }

    // Fallback to Excel
    const leads = await getAllLeads();
    res.json({
      success: true,
      source: 'excel',
      count: leads.length,
      leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching leads',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;
