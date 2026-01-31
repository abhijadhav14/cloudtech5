# 🚀 Quick Setup: Google Sheets for Form Data

The form is now deployed and working, but you need to set up Google Sheets to store the form submissions.

## ⚡ Quick Setup (5 minutes)

### Step 1: Create a Google Sheet
1. Go to https://sheets.google.com
2. Create a new spreadsheet
3. Name it "Cloud Tech Academy Leads"
4. Add these headers in Row 1:
   ```
   Date | Name | Email | Phone | Program | Graduation | Passout Year | Experience Level | Years of Experience | Current Company | Message | Status
   ```
5. Copy the Spreadsheet ID from the URL:
   - URL: `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit`
   - Copy the `YOUR_SPREADSHEET_ID` part

### Step 2: Create Google Service Account
1. Go to https://console.cloud.google.com
2. Create a new project or select existing
3. Enable "Google Sheets API":
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"
4. Create Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name it "cloud-tech-forms"
   - Click "Create and Continue"
   - Skip roles and click "Done"
5. Create JSON Key:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON"
   - Download the JSON file

### Step 3: Share Spreadsheet with Service Account
1. Open the downloaded JSON file
2. Find the `client_email` field (looks like: `your-service@project.iam.gserviceaccount.com`)
3. Go back to your Google Sheet
4. Click "Share" button
5. Paste the `client_email` and give "Editor" access
6. Click "Send"

### Step 4: Add Environment Variables to Vercel
1. Go to: https://vercel.com/abhishek-n-jadhavs-projects/cloudtechnologysolutions/settings/environment-variables

2. Add these variables:

**GOOGLE_SPREADSHEET_ID**
```
your_spreadsheet_id_from_step_1
```

**GOOGLE_SERVICE_ACCOUNT_JSON**
```json
{paste the entire content of the downloaded JSON file here - it should be one line}
```

**Example of minified JSON:**
```json
{"type":"service_account","project_id":"your-project","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"your-service@project.iam.gserviceaccount.com","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token"}
```

3. Make sure to minify the JSON (remove line breaks) before adding it

### Step 5: Redeploy
```bash
npm exec vercel -- --prod
```

## ✅ Test Your Setup

1. Go to https://www.cloudtechnologysolutions.in
2. Fill out the form
3. Submit
4. Check your Google Sheet - new row should appear!

---

## 🔧 Optional: WhatsApp Notifications

To enable WhatsApp confirmations:

1. **Sign up for Twilio**: https://www.twilio.com/try-twilio
2. **Activate WhatsApp Sandbox**:
   - Go to Twilio Console > Messaging > Try it out > Send a WhatsApp message
   - Follow instructions to activate sandbox
3. **Add to Vercel Environment Variables**:
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
   COMPANY_WHATSAPP_NUMBER=+919876543210
   ```
4. Redeploy: `npm exec vercel -- --prod`

---

## 📝 Current Status

✅ Website deployed and working
✅ Routing fixed (no more 404 on reload)
✅ Form validation working
⏳ Waiting for Google Sheets setup (form will work but data won't be saved until this is done)
⏳ Optional: WhatsApp notifications

---

## 🐛 Troubleshooting

**Form says "Load failed"**
- Make sure Google Sheets environment variables are added
- Check Vercel deployment logs: `vercel logs`
- Verify the service account has access to the spreadsheet

**Data not appearing in Google Sheet**
- Check if service account email has editor access
- Verify GOOGLE_SPREADSHEET_ID is correct
- Check Vercel function logs for errors

**Need Help?**
Run `vercel logs --follow` to see real-time logs of your serverless functions.

---

## 🎉 Once Setup is Complete

Your system will:
- ✅ Capture form submissions
- ✅ Save to Google Sheets automatically
- ✅ Send WhatsApp confirmations (if configured)
- ✅ Work seamlessly on all pages
- ✅ Handle high traffic automatically
