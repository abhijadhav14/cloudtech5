# ⚙️ Add These Environment Variables to Vercel

## 🔗 Go to:
https://vercel.com/abhishek-n-jadhavs-projects/cloudtechnologysolutions/settings/environment-variables

## 📋 Add These Variables (Production Environment):

### 1. TWILIO_ACCOUNT_SID
```
AC2e2c36933109a99027dff6727e5c1c35
```
- Mark as: **Sensitive** ✓

### 2. TWILIO_AUTH_TOKEN
```
6f4b85f280e90715f6a8d0b77ae5fba8
```
- Mark as: **Sensitive** ✓

### 3. TWILIO_WHATSAPP_NUMBER
```
whatsapp:+14155238886
```

### 4. COMPANY_PDF_URL
```
https://www.cloudtechnologysolutions.in/company-info.pdf
```

### 5. COMPANY_CONTACT
```
📞 Call: +91 79750 48408 | 📧 Email: info@cloudtechnologysolutions.in
```

---

## ✅ Steps:

1. Go to the Vercel link above
2. Click **"Add New"** 
3. For each variable:
   - Enter name (e.g., `TWILIO_ACCOUNT_SID`)
   - Paste value
   - Select **Production** (and Preview if you want)
   - Mark as **Sensitive** if needed
   - Click **Save**
4. After adding all 5, redeploy:
   ```bash
   npm exec vercel -- --prod
   ```

---

## 📤 Company PDF:

Do one of these:

**Option A:** Upload your company PDF
```bash
# 1. Get your PDF file
# 2. Place it in: public/company-info.pdf
# 3. Commit and push
git add public/company-info.pdf
git commit -m "Add company brochure"
git push
```

**Option B:** Use external URL
- If you have a Google Drive/Dropbox PDF link, update `COMPANY_PDF_URL` with that link

---

## 🧪 Test WhatsApp:

After adding variables and redeploying:
1. Go to https://www.cloudtechnologysolutions.in
2. Submit form with your WhatsApp number
3. You should receive a message in ~30 seconds!

