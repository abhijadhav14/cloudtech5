# 🚀 MANUAL STARTUP GUIDE - Step by Step

## ✅ What's Already Fixed

✅ Backend dependencies installed (265 packages)
✅ Frontend dependencies installed
✅ Vite port fixed to 5173
✅ Backend Twilio initialization non-blocking
✅ Backend import statement fixed
✅ Google Sheets non-blocking
✅ All code issues resolved

---

## 🚀 Getting Started (JUST 2 STEPS!)

### Step 1: Open Terminal 1 - Backend Server

```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server
npm run dev
```

**Wait for output:**
```
ℹ️  WhatsApp not configured (optional)
ℹ️  Google Sheets not configured (optional)
✅ Server running on http://localhost:3001
📧 Frontend URL: http://localhost:5173
```

**Leave this terminal OPEN and RUNNING**

### Step 2: Open Terminal 2 - Frontend Server

```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main
npm run dev
```

**Wait for output:**
```
VITE v5.4.19  ready in 227 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

**Leave this terminal OPEN and RUNNING**

---

## � Step 3: Open Browser

Go to: **http://localhost:5173/**

You should see the Cloud Tech Academy homepage with form.

---

## 🧪 Step 4: Test the Form

1. **Scroll to the form** (Hero Section)
2. **Fill in the form:**
   - Name: Your name (required)
   - Email: your@email.com (required)
   - Phone: Your phone number (required)
   - Program: Select a program (optional)
3. **Click:** "Get Free Counseling" button
4. **Wait:** Button shows "Submitting..."
5. **Success:** Message appears ✅ "Form submitted successfully!"

---

## ✅ Step 5: Verify Data Saved

Your form data should be saved to:
```
/Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server/leads.xlsx
```

Open the file:
```bash
open /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server/leads.xlsx
```

You should see your submitted data in the Excel file with columns:
- Date, Name, Email, Phone, Program, Status

---

## 📊 How It Works

1. **User fills form** → Clicks "Get Free Counseling"
2. **Frontend validates** → Sends POST to backend
3. **Backend receives** → Saves to Excel (primary)
4. **Optional features:**
   - WhatsApp message (if Twilio configured)
   - Google Sheets sync (if Google configured)
5. **Frontend shows** ✅ Success message

---

## 🚨 Troubleshooting

### Form shows "load failed"
- [ ] Check Terminal 1 is still running (backend)
- [ ] Check Terminal 2 is still running (frontend)
- [ ] Open browser console (F12) to see exact error
- [ ] Check server terminal for error logs

### Frontend not loading
- [ ] Make sure you're at: **http://localhost:5173/**
- [ ] NOT http://localhost:8080/ or other port
- [ ] Check Terminal 2 is still running frontend

### Backend won't start
- [ ] Check Terminal 1 shows: "✅ Server running on http://localhost:3001"
- [ ] If it says "address already in use":
  ```bash
  pkill -9 node
  sleep 2
  npm run dev
  ```

### Port conflicts
```bash
# In a new terminal, kill all node processes
pkill -9 node
# Wait 2 seconds
sleep 2
# Start backend again
cd server
npm run dev
```

---

## 📚 Files & Locations

| Item | Location |
|------|----------|
| Backend Server | `/server/index.js` |
| Frontend App | `/src/App.tsx` |
| Form Component | `/src/components/HeroSection.tsx` |
| API Client | `/src/utils/api.ts` |
| Form Data (Excel) | `/server/leads.xlsx` (created after first submission) |
| Backend Config | `/server/.env` |
| Frontend Config | `/.env` |

---

## ✅ Success Indicators

Everything working when you see:

✅ **Terminal 1:** "✅ Server running on http://localhost:3001"
✅ **Terminal 2:** "Local: http://localhost:5173/"
✅ **Browser:** Website loads at http://localhost:5173/
✅ **Form:** Can fill all required fields
✅ **Submit:** Form submits successfully
✅ **Message:** ✅ "Form submitted successfully!" appears
✅ **Excel:** File created with your data at `/server/leads.xlsx`

---

## 🎯 Quick Checklist

Before submitting a form:
- [ ] Backend terminal showing "✅ Server running on http://localhost:3001"
- [ ] Frontend terminal showing "Local: http://localhost:5173/"
- [ ] Browser loads http://localhost:5173/
- [ ] Form is visible on the page

After submitting a form:
- [ ] Success message appears (✅)
- [ ] Form clears
- [ ] No errors in browser console (F12)
- [ ] No errors in server terminal
- [ ] Excel file exists at `/server/leads.xlsx`
- [ ] New row added to Excel with your data

---

## 🎉 You're All Set!

Everything is configured and ready to use. Just run the 2 commands above and start testing!

**Questions?** Check the documentation files or look at the server/frontend terminal output for errors.
````

**Version:** 1.0.0
**Date:** January 16, 2026
