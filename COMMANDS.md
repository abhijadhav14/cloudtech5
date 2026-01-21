# 🚀 Quick Commands Reference

## Getting Started (Copy & Paste)

### Step 1: Install Backend
```bash
cd server
npm install
```

### Step 2: Setup Configuration
```bash
cp .env.example .env
# Then edit .env with your Twilio credentials
```

### Step 3: Start Backend
```bash
npm run dev
# Server runs on http://localhost:3001
```

### Step 4: Start Frontend (New Terminal)
```bash
npm run dev
# Frontend runs on http://localhost:5173
```

---

## Development Commands

### Backend Commands
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start development server (auto-reload)
npm run dev

# Start production server
npm start

# Check Node version
node --version

# Check npm version
npm --version
```

### Frontend Commands
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview

# Lint check
npm run lint
```

---

## Testing Commands

### Test Form Submission (Using curl)
```bash
# Basic submission
curl -X POST http://localhost:3001/api/forms/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+919876543210",
    "program": "SAP Training"
  }'

# Get all leads
curl http://localhost:3001/api/forms/leads

# Health check
curl http://localhost:3001/api/health
```

### Using Thunder Client or Postman
```
POST http://localhost:3001/api/forms/submit
Headers: Content-Type: application/json
Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "program": "SAP Training"
}
```

---

## Troubleshooting Commands

### Check if port is in use
```bash
# macOS/Linux
lsof -i :3001
lsof -i :5173

# Windows
netstat -ano | findstr :3001
```

### Kill process on port
```bash
# macOS/Linux
kill -9 <PID>

# Windows
taskkill /PID <PID> /F
```

### View server logs
```bash
# Terminal shows logs in real-time
# Check for errors in the server terminal
```

### Check Node & npm versions
```bash
node --version
npm --version
```

### Reinstall dependencies
```bash
# Frontend
rm -rf node_modules package-lock.json
npm install

# Backend
cd server
rm -rf node_modules package-lock.json
npm install
```

---

## File Navigation

### Go to Frontend
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main
```

### Go to Backend
```bash
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server
```

### View Frontend in Browser
```bash
# Open in browser
http://localhost:5173
```

### Test API Endpoint
```bash
# Open in browser
http://localhost:3001/api/health
```

---

## Database/Excel Commands

### View Excel file location
```bash
# On macOS/Linux
ls -lh /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server/leads.xlsx

# On Windows
dir "C:\path\to\server\leads.xlsx"
```

### Backup Excel file
```bash
# Copy Excel file
cp server/leads.xlsx server/leads_backup_$(date +%Y%m%d_%H%M%S).xlsx
```

---

## Environment Setup

### View current environment variables
```bash
# Frontend .env
cat .env

# Backend .env
cat server/.env
```

### Edit environment variables
```bash
# macOS/Linux - using nano
nano server/.env

# Windows - using notepad
notepad server\.env

# Or use your editor (VS Code)
code server/.env
```

### Set temporary environment variable
```bash
# macOS/Linux
export PORT=3002
npm run dev

# Windows (PowerShell)
$env:PORT="3002"
npm run dev
```

---

## Documentation Navigation

### Read in Order
```bash
# 1. Quick start (5 min)
cat QUICK_START.md

# 2. Setup instructions (15 min)
cat SETUP_INSTRUCTIONS.md

# 3. Implementation details (20 min)
cat IMPLEMENTATION_SUMMARY.md

# 4. Architecture (15 min)
cat ARCHITECTURE.md

# 5. Backend docs (15 min)
cat server/README.md
```

### Open in VS Code
```bash
code QUICK_START.md
code SETUP_INSTRUCTIONS.md
code IMPLEMENTATION_SUMMARY.md
code ARCHITECTURE.md
code server/README.md
```

---

## Quick Deployment

### Build Frontend
```bash
npm run build
# Creates build/ directory
```

### Check Build Size
```bash
du -sh dist/
```

### Prepare for Production
```bash
# Backend - set environment
NODE_ENV=production npm start

# Frontend - environment variables ready
VITE_API_URL=https://api.example.com npm run build
```

---

## Useful Links

```bash
# Open in browser
# Twilio Console (for credentials)
open https://www.twilio.com/console

# Frontend localhost
open http://localhost:5173

# Backend API health
open http://localhost:3001/api/health

# This project repo (if on GitHub)
open https://github.com/your-repo/cloud-tech-academy
```

---

## Package Management

### Add new backend package
```bash
cd server
npm install package-name
```

### Add new frontend package
```bash
npm install package-name
```

### Update packages
```bash
# Frontend
npm update

# Backend
cd server && npm update
```

### Remove package
```bash
# Frontend
npm uninstall package-name

# Backend
cd server && npm uninstall package-name
```

---

## Common Issues - Quick Fixes

### "Port already in use"
```bash
# Change port in .env
PORT=3002 npm run dev
```

### "Cannot find module 'express'"
```bash
cd server && npm install
```

### "Module not found"
```bash
# Frontend
rm -rf node_modules && npm install

# Backend
cd server && rm -rf node_modules && npm install
```

### "Twilio credentials not working"
```bash
# Verify credentials in server/.env
cat server/.env | grep TWILIO

# Get new ones from:
open https://www.twilio.com/console
```

### Clear cache
```bash
# Frontend build cache
rm -rf dist/

# Node modules cache
rm -rf node_modules/
npm cache clean --force
```

---

## File Editing Quick Shortcuts

### Edit main server file
```bash
code server/index.js
```

### Edit API routes
```bash
code server/routes/formSubmission.js
```

### Edit frontend form
```bash
code src/components/HeroSection.tsx
```

### Edit API client
```bash
code src/utils/api.ts
```

### Edit environment
```bash
code server/.env
```

---

## Monitoring & Logs

### Watch server logs in real-time
```bash
cd server && npm run dev
# Keeps running, shows logs
```

### Search for errors in logs
```bash
# In terminal, use Ctrl+F to search
npm run dev 2>&1 | grep -i error
```

### Save logs to file
```bash
npm run dev > server.log 2>&1 &
# Later: cat server.log
```

---

## Quick Testing Workflow

### Step 1: Start services
```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
npm run dev
```

### Step 2: Test in browser
```bash
# Open http://localhost:5173
# Fill form and submit
```

### Step 3: Verify data
```bash
# Check Excel file
ls -lh server/leads.xlsx

# Get leads via API
curl http://localhost:3001/api/forms/leads
```

### Step 4: Check WhatsApp
```bash
# Wait for message on phone
# Or check Twilio logs:
open https://www.twilio.com/console/logs
```

---

## Reset Everything

### Full Clean Reset
```bash
# Stop all running servers (Ctrl+C in terminals)

# Frontend
rm -rf node_modules dist package-lock.json
npm install

# Backend
cd server
rm -rf node_modules package-lock.json leads.xlsx
cp .env.example .env
npm install

# Start fresh
# Terminal 1: cd server && npm run dev
# Terminal 2: npm run dev
```

---

## Backup & Recovery

### Backup everything
```bash
# Create backup
tar -czf cloud-tech-backup-$(date +%Y%m%d).tar.gz \
  --exclude=node_modules \
  --exclude=dist \
  --exclude=.git \
  .

# List backups
ls -lh cloud-tech-backup-*.tar.gz
```

### Backup Excel leads
```bash
cp server/leads.xlsx server/leads_backup_$(date +%Y%m%d_%H%M%S).xlsx
```

---

**These are your most useful commands!** 🚀

Keep this file handy while developing. Most common tasks are here.
