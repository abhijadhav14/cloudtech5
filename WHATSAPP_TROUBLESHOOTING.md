# 🔍 Twilio WhatsApp Not Working - Diagnostic Guide

## Common Issues & Solutions

### ❌ Issue 1: Phone Number Not in Sandbox
**Symptom:** Form submits but no WhatsApp received

**Solution:**
1. Go to https://www.twilio.com/console
2. Click **Messaging** → **Try it out** → **Send a WhatsApp message**
3. Look for **"Sandbox Participants"**
4. Add your phone number (+91 7975048408):
   - Send this message FROM your phone to the Twilio sandbox number:
   ```
   join [code]
   ```
   - Example: `join brown-mouse`
5. Wait for confirmation
6. Now try the form again

---

### ❌ Issue 2: Wrong Phone Format
**Symptom:** WhatsApp says invalid number

**Solution:**
- Use format: `+917975048408` (with + and country code 91)
- NOT: `07975048408` or `9175048408`

---

### ❌ Issue 3: Environment Variables Not Loaded
**Symptom:** Vercel shows old/missing values

**Solution:**
1. Go to Vercel dashboard
2. Check all 5 environment variables are set:
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - TWILIO_WHATSAPP_NUMBER
   - COMPANY_PDF_URL
   - COMPANY_CONTACT
3. Redeploy: `npm exec vercel -- --prod`

---

## 🧪 Quick Test in Twilio Console

1. Go to https://www.twilio.com/console/messaging
2. Click **Send a Message**
3. From: Your Twilio WhatsApp number
4. To: Your phone number
5. Message: Test message
6. Send

**If this test works but form doesn't:**
- Issue is with our code or configuration

**If this test also fails:**
- Issue is with Twilio sandbox setup

---

## 📋 Checklist

- [ ] Phone number added to Twilio sandbox
- [ ] Sent "join [code]" message to sandbox
- [ ] Got confirmation from Twilio
- [ ] Environment variables saved in Vercel
- [ ] Vercel redeployed (`npm exec vercel -- --prod`)
- [ ] Tried form again with +91 format phone number
- [ ] Waited 30-60 seconds for message

---

## 🆘 If Still Not Working

1. **Check Vercel Logs:**
   ```bash
   npm exec vercel -- logs cloudtechnologysolutions.in
   ```

2. **Check Twilio Logs:**
   - Go to https://www.twilio.com/console/messaging/logs/messages
   - Look for failed/rejected messages

3. **Test manually in Twilio:**
   - Try sending a message directly from Twilio console
   - If that works, the issue is with our code
   - If that fails, the issue is with Twilio setup

