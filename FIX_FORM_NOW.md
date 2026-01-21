# 🚀 QUICK START - Form Submission Fix

## The Problem
Form shows "load failed" error when you submit it.

## The Solution
**The backend server needs to be running!**

## DO THIS NOW

### 1️⃣ Open Terminal 1
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server
npm install
npm run dev
```

**You should see:**
```
✅ Server running on http://localhost:3001
```

### 2️⃣ Open Terminal 2
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main
npm run dev
```

**You should see:**
```
Local:   http://localhost:5173/
```

### 3️⃣ Open Browser
Go to: `http://localhost:5173/`

### 4️⃣ Fill The Form
- Name: Your name
- Email: your@email.com  
- Phone: Your phone number
- Click "Get Free Counseling"

### ✅ Done!
You should see: **"Form submitted successfully!"**

---

## 🆘 Still Not Working?

### Check 1: Is backend running?
- Look at Terminal 1
- Should say: `✅ Server running on http://localhost:3001`
- If not → Terminal 1 still running? Press Ctrl+C and run `npm run dev` again

### Check 2: Test the API
Open new browser tab:
```
http://localhost:3001/api/health
```

Should show:
```json
{"status":"OK","message":"Server is running"}
```

### Check 3: Check browser console
Press F12 → Console → Submit form → Look for errors

### Check 4: Check server logs
Look at Terminal 1 output while submitting form
- Should show success message or errors

---

## 📝 Key Points

✅ **Backend:** Terminal 1 - port 3001
✅ **Frontend:** Terminal 2 - port 5173
✅ **Data Saved:** `/server/leads.xlsx`
✅ **Both must run** at the same time

---

Need help? Check:
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Full troubleshooting guide
- [RUN_LOCALLY.md](RUN_LOCALLY.md) - Complete setup instructions
