import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Twilio client only if credentials are provided
let client = null;

if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
  try {
    client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    console.log('✅ WhatsApp (Twilio) initialized');
  } catch (error) {
    console.warn('⚠️  WhatsApp (Twilio) initialization failed:', error.message);
  }
} else {
  console.log('ℹ️  WhatsApp not configured (optional)');
}

const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+1234567890';

const COMPANY_MESSAGE = `
🎓 *Welcome to Cloud Tech Solutions!*

Thank you for your interest! Here are our details:

📧 Email: cloudtechsolutions2026@gmail.com
📱 Phone: +91 79750 48408 | +91 97410 99057
📍 Location: Bangalore, Karnataka, India
🌐 Website: https://cloudtechsolutions.com

🚀 *Why Choose Us?*
✨ Very Less Fees in Market
⚡ 100% Job Assistance
🏆 Professional Adaptability Training
💼 Real-Time Projects & Hands-on Experience

Our team will contact you soon!

#CloudTechSolutions #CareerReady
`;

export async function sendWhatsAppMessage(phoneNumber, customMessage = null) {
  try {
    // Check if Twilio is configured
    if (!client) {
      console.warn('⚠️  WhatsApp not configured - message not sent');
      return { success: false, message: 'WhatsApp not configured' };
    }

    // Validate phone number format
    const formattedPhone = formatPhoneNumber(phoneNumber);
    
    const message = await client.messages.create({
      from: TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:${formattedPhone}`,
      body: customMessage || COMPANY_MESSAGE
    });
    
    console.log(`✅ WhatsApp message sent to ${formattedPhone}, SID: ${message.sid}`);
    return {
      success: true,
      messageSid: message.sid,
      phone: formattedPhone
    };
  } catch (error) {
    console.error('❌ Error sending WhatsApp message:', error.message);
    throw error;
  }
}

function formatPhoneNumber(phone) {
  // Remove any non-digit characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // If it doesn't start with +, add +91 for India
  if (!cleaned.startsWith('+')) {
    if (cleaned.startsWith('91')) {
      cleaned = '+' + cleaned;
    } else if (cleaned.length === 10) {
      cleaned = '+91' + cleaned;
    } else {
      cleaned = '+91' + cleaned;
    }
  }
  
  return cleaned;
}

export async function sendConfirmationMessage(phoneNumber, userName) {
  const customMessage = `
Hello ${userName} 👋

Thank you for registering with Cloud Tech Solutions!

We have received your information and will contact you soon with personalized program recommendations.

📞 In the meantime, feel free to reach out:
• Call: +91 79750 48408
• Email: cloudtechsolutions2026@gmail.com

🎯 Check out our programs: https://cloudtechsolutions.com/programs

Looking forward to launching your tech career! 🚀
  `;
  
  return sendWhatsAppMessage(phoneNumber, customMessage);
}
