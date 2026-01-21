# Setup Instructions

## Installation & Running the Project

### 1. **Server Setup**

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
# or
bun install
```

Create a `.env` file in the server directory with your Twilio credentials:

```bash
cp .env.example .env
```

Then edit `.env` and add:

```env
PORT=3001
NODE_ENV=development
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155552671  # Your Twilio WhatsApp number
COMPANY_WHATSAPP_NUMBER=+91XXXXXXXXXX  # Your company WhatsApp number
FRONTEND_URL=http://localhost:5173
EXCEL_FILE_PATH=./leads.xlsx
```

Start the server:

```bash
npm run dev
# or
bun run dev
```

The server will run on `http://localhost:3001`

### 2. **Frontend Setup**

The frontend is already configured. The `.env` file is already created with the API URL.

Install dependencies (if not already done):

```bash
npm install
# or
bun install
```

Start the development server:

```bash
npm run dev
# or
bun run dev
```

The frontend will run on `http://localhost:5173`

---

## Features Implemented

✅ **Form Submission API**
- Accepts name, email, phone, and program selection
- Validates required fields
- Returns success/error responses

✅ **Excel Data Storage**
- Form submissions are automatically saved to `leads.xlsx`
- Excel file is created with formatted headers
- Data includes: Date, Name, Email, Phone, Program, Status
- File is stored in the server directory

✅ **WhatsApp Integration**
- Sends automatic WhatsApp confirmation message to users
- WhatsApp message includes:
  - Welcome greeting
  - Company details (email, phone, location)
  - Why Choose Us highlights
  - Website link
- Uses Twilio WhatsApp API
- Handles phone number formatting automatically

---

## API Endpoints

### **POST /api/forms/submit**
Submit a form with user details and save to Excel + send WhatsApp

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "program": "SAP"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully! You will receive a WhatsApp message shortly.",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+919876543210",
    "program": "SAP"
  }
}
```

### **GET /api/forms/leads**
Retrieve all submitted leads from Excel

**Response:**
```json
{
  "success": true,
  "count": 5,
  "leads": [
    {
      "date": "16/01/2026",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+919876543210",
      "program": "SAP",
      "status": "New Lead"
    }
  ]
}
```

---

## Getting Twilio Credentials

1. Go to https://www.twilio.com/
2. Sign up for a free account
3. Get your Account SID and Auth Token from the console
4. Set up WhatsApp sandbox or purchase a WhatsApp number
5. Add your credentials to the `.env` file

---

## File Structure

```
cloud-tech-academy-main/
├── server/
│   ├── index.js                    # Main server file
│   ├── package.json
│   ├── .env.example
│   ├── .env                        # Your credentials (create this)
│   ├── routes/
│   │   └── formSubmission.js       # Form API routes
│   ├── utils/
│   │   ├── excelUtils.js          # Excel file handling
│   │   └── whatsappUtils.js       # WhatsApp message sending
│   └── leads.xlsx                 # Generated Excel file with submissions
├── src/
│   ├── utils/
│   │   └── api.ts                 # Frontend API client
│   ├── components/
│   │   └── HeroSection.tsx        # Updated with form handling
│   └── ...
├── .env                           # Frontend env vars
└── ...
```

---

## Troubleshooting

### WhatsApp Messages Not Sending?
- Check if Twilio credentials are correct
- Verify phone numbers are in correct format
- Check Twilio console for error logs
- Ensure WhatsApp sandbox is activated

### Form Data Not Saving to Excel?
- Check if `leads.xlsx` exists in server directory
- Verify file permissions
- Check server logs for errors

### CORS Issues?
- Ensure FRONTEND_URL in server `.env` matches your frontend URL
- Frontend should call `http://localhost:3001/api`

---

## Next Steps

1. Set up Twilio account and get credentials
2. Update server `.env` with Twilio details
3. Run server: `npm run dev` in `server/` directory
4. Run frontend: `npm run dev` in root directory
5. Test form submission - you should receive WhatsApp message and data should appear in `leads.xlsx`

