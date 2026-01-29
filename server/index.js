import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import formSubmissionRoutes from './routes/formSubmission.js';
import { initializeGoogleSheets, getOrCreateSpreadsheet, ensureHeaders } from './utils/googleSheetsUtils.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = new Set(
  [
    process.env.FRONTEND_URL,
    'http://localhost:5173',
    'http://localhost:5174'
  ].filter(Boolean)
);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/forms', formSubmissionRoutes);

// Initialize Google Sheets (optional)
async function initializeGoogle() {
  try {
    const initialized = await initializeGoogleSheets();
    if (initialized) {
      const spreadsheetId = await getOrCreateSpreadsheet();
      if (spreadsheetId) {
        await ensureHeaders(spreadsheetId);
        console.log('📊 Google Sheets ready for data sync');
      }
    }
  } catch (error) {
    console.warn('⚠️ Google Sheets initialization failed:', error.message);
    console.warn('   Falling back to Excel storage only');
  }
}

// Initialize on startup
await initializeGoogle();

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});
