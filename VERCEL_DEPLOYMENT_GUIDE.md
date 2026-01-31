# 🚀 Deployment Guide for Cloud Tech Academy

## Issues Fixed

### ✅ Issue 1: 404 Error on Page Reload
**Problem**: Refreshing pages like `/programs`, `/about`, etc. showed "404: NOT_FOUND"

**Solution**: Updated `vercel.json` with proper SPA routing configuration to redirect all routes to `index.html` for client-side routing.

### ✅ Issue 2: Form Not Working in Production
**Problem**: Form submissions failed on the deployed site but worked locally

**Solution**: Created Vercel serverless functions for the backend API that work seamlessly with the frontend.

---

## 📋 Deployment Steps

### 1. Configure Environment Variables in Vercel

Go to your Vercel project settings → Environment Variables and add the following:

#### Required for Form Submission:
```bash
# Twilio WhatsApp Configuration
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
COMPANY_WHATSAPP_NUMBER=+919876543210

# Excel Storage (Vercel will create this file in /tmp)
EXCEL_FILE_PATH=/tmp/leads.xlsx

# Node Environment
NODE_ENV=production
```

#### Optional (for Google Sheets sync):
```bash
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}
```

### 2. Deploy to Vercel

Option A: Using Vercel CLI
```bash
npm exec vercel -- --prod
```

Option B: Using Git (Recommended)
```bash
git add .
git commit -m "Fix: Added Vercel serverless functions and SPA routing"
git push origin main
```

Vercel will automatically detect the changes and deploy.

### 3. Verify Deployment

After deployment, test:
1. ✅ Navigate to https://www.cloudtechnologysolutions.in/programs and reload - should work
2. ✅ Submit a form - should receive success message
3. ✅ Check if WhatsApp confirmation is sent (if Twilio is configured)

---

## 🏗️ Architecture Changes

### Before:
- Frontend: Vercel (working)
- Backend: Separate Node.js server (not deployed)
- Result: Form submissions failed in production

### After:
- Frontend: Vercel (working)
- Backend: Vercel Serverless Functions (automatically deployed)
- API Routes: `/api/forms/submit` and `/api/forms/leads`
- Result: Everything works seamlessly

---

## 📁 New Files Created

1. `/api/forms/submit.js` - Serverless function for form submissions
2. `/api/forms/leads.js` - Serverless function to fetch leads
3. `/api/package.json` - Dependencies for serverless functions

---

## 🔧 Files Modified

1. `vercel.json` - Added SPA routing configuration
2. `src/utils/api.ts` - Updated API base URL to use serverless functions
3. All components now work with the new API structure

---

## 🧪 Testing Locally

To test the setup locally before deploying:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Run Vercel dev server (simulates production environment)
vercel dev
```

This will:
- Start the frontend on port 3000
- Run serverless functions locally
- Test the exact setup that will run in production

---

## 📞 WhatsApp Configuration (Optional)

If you want WhatsApp confirmations:

1. Sign up for Twilio: https://www.twilio.com/
2. Enable WhatsApp Sandbox or get approved number
3. Add environment variables in Vercel:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_NUMBER`
   - `COMPANY_WHATSAPP_NUMBER`

---

## 📊 Google Sheets Integration (Optional)

For automatic Google Sheets backup:

1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create a service account and download credentials
4. Share your spreadsheet with the service account email
5. Add environment variables in Vercel:
   - `GOOGLE_SPREADSHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_JSON`

---

## 🐛 Troubleshooting

### Form still not working?
- Check Vercel deployment logs: `vercel logs`
- Verify environment variables are set in Vercel dashboard
- Test API directly: `https://www.cloudtechnologysolutions.in/api/forms/submit`

### Still getting 404 errors?
- Clear browser cache
- Check if the latest commit is deployed
- Verify `vercel.json` has the rewrites configuration

### Excel file errors?
- Vercel serverless functions use `/tmp` directory
- Files in `/tmp` are temporary and will be deleted
- Consider using Google Sheets for permanent storage

---

## 📝 Important Notes

1. **Serverless Functions Limitations**:
   - Cold start: First request may be slower (1-3 seconds)
   - File system is read-only except `/tmp` directory
   - `/tmp` files are temporary and may be deleted

2. **Recommended**: Use Google Sheets integration for permanent data storage

3. **Local Development**: 
   - Use the Express server in `/server` folder for local dev
   - Use `npm run dev` in root for frontend
   - Use `cd server && npm start` for backend

4. **Production**:
   - Vercel handles everything automatically
   - Serverless functions scale automatically
   - No need to manage separate backend server

---

## ✅ Success Checklist

- [ ] Environment variables configured in Vercel
- [ ] Code deployed to production
- [ ] Can navigate to all routes and reload without 404
- [ ] Form submissions work correctly
- [ ] WhatsApp notifications sent (if configured)
- [ ] Data saved to Excel/Google Sheets
- [ ] No console errors in browser

---

## 🎉 All Done!

Your site should now work perfectly with:
- ✅ Proper routing (no more 404s)
- ✅ Working form submissions
- ✅ Serverless backend
- ✅ Scalable architecture

For support, check the Vercel logs or contact your development team.
