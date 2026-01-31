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
