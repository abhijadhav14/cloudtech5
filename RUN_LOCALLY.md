# How to Run the Project Locally

## Prerequisites
- Node.js 18+ installed
- Two separate terminal windows/tabs

## Step 1: Install Dependencies

### Frontend
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main
npm install
```

### Backend
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server
npm install
```

## Step 2: Set Up Environment Variables

### Backend (.env in /server directory)
Create `/server/.env` file with:
```
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Optional: WhatsApp (Twilio)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
BUSINESS_PHONE_NUMBER=+0987654321

# Optional: Google Sheets
GOOGLE_SERVICE_ACCOUNT_JSON={}
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_DRIVE_FOLDER_ID=your_folder_id
```

### Frontend (.env in root directory)
Create `.env` file with:
```
VITE_API_URL=http://localhost:3001/api
```

## Step 3: Start the Development Servers

### Terminal 1 - Backend
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server
npm run dev
```

Expected output:
```
✅ Server running on http://localhost:3001
📧 Frontend URL: http://localhost:5173
```

### Terminal 2 - Frontend
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main
npm run dev
```

Expected output:
```
Local:   http://localhost:5173/
```

## Step 4: Test the Setup

1. **Health Check Backend:**
   - Open browser and go to: `http://localhost:3001/api/health`
   - Should show: `{"status":"OK","message":"Server is running"}`

2. **Test Form Submission:**
   - Go to: `http://localhost:5173/`
   - Scroll to the form
   - Fill in: Name, Email, Phone (all required), optionally Program
   - Click "Get Free Counseling"
   - Should show ✅ success message

3. **Check Excel File:**
   - Check `/server/leads.xlsx` for saved form data
   - New rows should be added with each submission

## Troubleshooting

### "load failed" Error
- ✅ Verify backend is running in Terminal 1
- ✅ Check that `npm run dev` shows "Server running on http://localhost:3001"
- ✅ Open browser console (F12) and check for error messages
- ✅ Try health check: http://localhost:3001/api/health

### Form Shows "load failed" but No Error
- Check browser Network tab (F12 → Network)
- Look for the POST request to `/api/forms/submit`
- Check the response status and body
- Check server terminal logs for any errors

### Backend Won't Start
- Run `npm install` again in `/server` directory
- Make sure Node.js 18+ is installed: `node --version`
- Check for port conflicts: `lsof -i :3001`
- Try killing the process: `kill -9 $(lsof -t -i:3001)`

### Google Sheets Not Working (Optional)
- Google Sheets is optional - forms will still save to Excel
- To enable: Set `GOOGLE_SERVICE_ACCOUNT_JSON` in `.env`
- Check server logs for Google Sheets initialization messages

## File Locations

```
/server/
  ├── index.js (main server)
  ├── routes/formSubmission.js (form API)
  ├── utils/
  │   ├── excelUtils.js (Excel storage)
  │   ├── whatsappUtils.js (WhatsApp integration)
  │   └── googleSheetsUtils.js (Google Sheets integration)
  ├── leads.xlsx (form data saved here)
  └── .env (configuration)

/src/
  ├── components/HeroSection.tsx (form UI)
  └── utils/api.ts (API client)
```

## Next Steps

1. ✅ Keep both servers running
2. ✅ Test form submission
3. ✅ Verify Excel file creation
4. ✅ (Optional) Set up Twilio for WhatsApp
5. ✅ (Optional) Set up Google Sheets for cloud sync
