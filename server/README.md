# Cloud Tech Academy - Backend Server

Backend API server for handling form submissions, Excel data storage, and WhatsApp notifications.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Then update `.env` with your details:

```env
PORT=3001
NODE_ENV=development

# Twilio Configuration
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155552671
COMPANY_WHATSAPP_NUMBER=+91XXXXXXXXXX

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# Excel file location
EXCEL_FILE_PATH=./leads.xlsx
```

### 3. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will start on `http://localhost:3001`

---

## Getting Twilio Credentials

### Step 1: Sign Up
- Go to [Twilio Console](https://www.twilio.com/console)
- Create a free account

### Step 2: Get Credentials
- Account SID: Available in the Twilio console homepage
- Auth Token: Available in the Twilio console homepage

### Step 3: Set Up WhatsApp
Two options:

**Option A: Twilio WhatsApp Sandbox (Free)**
1. Navigate to Messaging > WhatsApp > Sandbox
2. Follow the setup instructions
3. You'll get a sandbox number like `whatsapp:+14155552671`
4. Message the sandbox to activate your number

**Option B: Production WhatsApp Number**
1. Navigate to Messaging > WhatsApp
2. Purchase a WhatsApp number
3. Set it up for your account

---

## API Documentation

### Health Check
```
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### Submit Form
```
POST /api/forms/submit
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "program": "SAP"
}
```

**Response (Success):**
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

**Response (Error):**
```json
{
  "success": false,
  "message": "Name, email, and phone are required",
  "error": "Error details..."
}
```

### Get All Leads
```
GET /api/forms/leads
```

**Response:**
```json
{
  "success": true,
  "count": 3,
  "leads": [
    {
      "date": "16/01/2026",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+919876543210",
      "program": "SAP",
      "status": "New Lead"
    },
    {
      "date": "16/01/2026",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "phone": "+919876543211",
      "program": "Cloud Computing",
      "status": "New Lead"
    }
  ]
}
```

---

## Features

### ✅ Form Submission
- Validates required fields (name, email, phone)
- Accepts optional program selection
- Returns formatted response with timestamps

### ✅ Excel Storage
- Automatically creates `leads.xlsx` file
- Formatted headers with styling
- Date stamping for each submission
- New rows added for each form
- Professional formatting (colors, column widths)

### ✅ WhatsApp Integration
- Automatic confirmation messages sent to users
- Includes company details and contact information
- Phone number auto-formatting (handles various formats)
- Error handling - doesn't fail form submission if WhatsApp fails

### ✅ Error Handling
- Input validation
- CORS support
- Detailed error messages in development mode
- Proper HTTP status codes

---

## Project Structure

```
server/
├── index.js                      # Main server file
├── package.json                  # Dependencies
├── .env.example                  # Environment variables template
├── .env                          # Your credentials (not in git)
├── routes/
│   └── formSubmission.js         # Form submission endpoints
├── utils/
│   ├── excelUtils.js            # Excel file handling
│   └── whatsappUtils.js         # WhatsApp API integration
├── leads.xlsx                    # Generated Excel file
└── README.md                     # This file
```

---

## Environment Variables Explained

| Variable | Description |
|----------|-------------|
| PORT | Port number for server (default: 3001) |
| NODE_ENV | development or production |
| TWILIO_ACCOUNT_SID | Your Twilio account ID |
| TWILIO_AUTH_TOKEN | Your Twilio authentication token |
| TWILIO_WHATSAPP_NUMBER | Your Twilio WhatsApp number with `whatsapp:` prefix |
| COMPANY_WHATSAPP_NUMBER | Your company's WhatsApp number for user messaging |
| FRONTEND_URL | Frontend URL for CORS configuration |
| EXCEL_FILE_PATH | Path where Excel file will be stored |

---

## Dependencies

- **express**: Web framework
- **cors**: Enable cross-origin requests
- **dotenv**: Environment variable management
- **exceljs**: Excel file creation and manipulation
- **twilio**: WhatsApp API integration
- **nodemailer**: Email support (optional future feature)

---

## Troubleshooting

### Issue: WhatsApp messages not sending

**Solution:**
1. Verify Twilio credentials in `.env`
2. Check if sandbox is activated (message "join" to sandbox number)
3. Ensure phone numbers are in correct format (+91XXXXXXXXXX for India)
4. Check Twilio console logs for API errors
5. Verify account has enough credits

### Issue: Excel file not being created

**Solution:**
1. Check if `EXCEL_FILE_PATH` is correct
2. Verify file permissions in the directory
3. Check server logs for detailed error
4. Ensure `exceljs` is installed

### Issue: CORS errors

**Solution:**
1. Update `FRONTEND_URL` in `.env` to match your frontend URL
2. Ensure frontend is running on the correct port
3. Check browser console for detailed CORS error

### Issue: Port already in use

**Solution:**
```bash
# Change PORT in .env or:
PORT=3002 npm run dev
```

---

## Production Deployment

### Before Deploying:
1. Set `NODE_ENV=production`
2. Use strong Twilio credentials
3. Set proper `FRONTEND_URL` for CORS
4. Store `.env` securely (never commit to git)
5. Use environment variables from hosting platform

### Deployment Steps:
1. Install dependencies: `npm install`
2. Set environment variables in hosting platform
3. Run: `npm start`

---

## Support & Documentation

- [Twilio WhatsApp API Docs](https://www.twilio.com/docs/whatsapp)
- [ExcelJS Documentation](https://github.com/exceljs/exceljs)
- [Express.js Guide](https://expressjs.com/)

---

**Created:** January 16, 2026
**Last Updated:** January 16, 2026
