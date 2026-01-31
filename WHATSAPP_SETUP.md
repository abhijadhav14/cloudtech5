# 📱 WhatsApp Message Setup with PDF

Your form is now configured to send WhatsApp messages with company information to users who submit the form.

## 🚀 Required Setup

### 1. **Get Twilio WhatsApp Credentials**

1. Go to https://www.twilio.com/try-twilio
2. Sign up and verify your phone number
3. Go to **Messaging** > **Try it out** > **Send a WhatsApp message**
4. Follow instructions to activate WhatsApp Sandbox
5. You'll get a Twilio WhatsApp number (e.g., `whatsapp:+14155238886`)

Find your credentials:
- Go to **Account** > **API Keys & tokens**
- Copy:
  - **Account SID** 
  - **Auth Token**

### 2. **Provide Your Company PDF**

You have two options:

#### Option A: Host PDF on Your Server (Recommended)
1. Upload your company PDF to `/public/company-info.pdf` in your project
2. It will be accessible at: `https://www.cloudtechnologysolutions.in/company-info.pdf`

#### Option B: Use External PDF URL
- Host PDF on Google Drive, Dropbox, or similar
- Get the direct download link

### 3. **Add Environment Variables to Vercel**

Go to: https://vercel.com/abhishek-n-jadhavs-projects/cloudtechnologysolutions/settings/environment-variables

Add these variables:

```
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
COMPANY_PDF_URL=https://www.cloudtechnologysolutions.in/company-info.pdf
COMPANY_CONTACT=📞 Call: +91-XXXXXXXXXX | 📧 Email: info@cloudtechnologysolutions.in
```

### 4. **Test WhatsApp Message**

1. Deploy the changes (automatic from git push)
2. Submit a test form with your phone number
3. Wait 30 seconds - you should receive a WhatsApp message!

---

## 📋 What the WhatsApp Message Contains

When someone submits a form, they'll receive:

```
Hello [Name]! 👋

Thank you for your interest in Cloud Technology Solutions!

📚 Here's our company information and programs:
[PDF Link]

Our career counselor will contact you within 24 hours 
to discuss your learning path.

📞 For immediate assistance:
[Your Contact Info]

Best regards,
Cloud Technology Solutions Team ☁️
```

---

## 📤 How to Upload Your Company PDF

### Option 1: Using Terminal
```bash
# Copy your PDF to public folder
cp /path/to/your/company-brochure.pdf ./public/company-info.pdf

git add public/company-info.pdf
git commit -m "Add company brochure PDF"
npm exec vercel -- --prod
```

### Option 2: Using Vercel Dashboard
1. Go to your project in Vercel
2. Upload file to public folder via git

---

## ✅ Checklist

- [ ] Twilio account created
- [ ] WhatsApp Sandbox activated
- [ ] Credentials copied (Account SID, Auth Token)
- [ ] Company PDF uploaded to `/public/company-info.pdf`
- [ ] Environment variables added to Vercel
- [ ] Deployment complete
- [ ] Test form submitted
- [ ] WhatsApp message received

---

## 🐛 Troubleshooting

**"WhatsApp message not received"**
- Check Twilio credentials are correct
- Verify TWILIO_WHATSAPP_NUMBER format: `whatsapp:+1234567890`
- Check Vercel logs: `vercel logs --follow`

**"Invalid credentials"**
- Verify Account SID and Auth Token are correct
- No extra spaces in environment variables

**"Form successful but no WhatsApp"**
- WhatsApp is optional - form works without it
- Check Vercel function logs for WhatsApp errors

---

## 💡 Tips

- Test with your own number first
- Twilio free trial allows SMS/WhatsApp testing
- Save phone numbers in your database for follow-up
- Consider adding Google Sheets integration for data storage

