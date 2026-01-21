import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Google Sheets API Setup
const sheets = google.sheets('v4');
let auth = null;

// Initialize Google Auth
export async function initializeGoogleSheets() {
  try {
    // Check if service account credentials are provided
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    
    if (!serviceAccountJson) {
      console.log('ℹ️  Google Sheets not configured (optional)');
      return false;
    }

    // Parse service account credentials
    let credentials;
    try {
      credentials = JSON.parse(serviceAccountJson);
    } catch (error) {
      console.warn('⚠️  Invalid GOOGLE_SERVICE_ACCOUNT_JSON format - Google Sheets disabled');
      return false;
    }

    // Create auth client
    auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    console.log('✅ Google Sheets authentication initialized');
    return true;
  } catch (error) {
    console.warn('⚠️  Google Sheets initialization failed:', error.message);
    console.log('ℹ️  Continuing without Google Sheets (Excel will still work)');
    return false;
  }
}

// Create or get spreadsheet
export async function getOrCreateSpreadsheet() {
  if (!auth) {
    console.warn('⚠️ Google Sheets not initialized');
    return null;
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      console.warn('⚠️ GOOGLE_SPREADSHEET_ID not set in environment');
      return null;
    }

    // Verify spreadsheet exists and is accessible
    const response = await sheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });

    console.log('✅ Connected to Google Sheet:', response.data.properties.title);
    return spreadsheetId;
  } catch (error) {
    console.error('❌ Error accessing spreadsheet:', error.message);
    return null;
  }
}

// Add headers to spreadsheet
export async function ensureHeaders(spreadsheetId) {
  if (!auth || !spreadsheetId) {
    return false;
  }

  try {
    const range = 'Sheet1!A1:L1';
    
    // Check if headers exist
    const getResponse = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    });

    if (!getResponse.data.values || getResponse.data.values.length === 0) {
      // Add headers
      const headers = [['Date', 'Name', 'Email', 'Phone', 'Program', 'Graduation', 'Passout Year', 'Experience Level', 'Years of Experience', 'Current Company', 'Message', 'Status']];
      
      await sheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        resource: {
          values: headers,
        },
      });

      // Format header row
      await sheets.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        resource: {
          requests: [
            {
              repeatCell: {
                range: {
                  sheetId: 0,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: 12,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: {
                      red: 0.26,
                      green: 0.44,
                      blue: 0.77,
                    },
                    textFormat: {
                      foregroundColor: {
                        red: 1,
                        green: 1,
                        blue: 1,
                      },
                      bold: true,
                    },
                    horizontalAlignment: 'CENTER',
                  },
                },
                fields: 'userEnteredFormat',
              },
            },
          ],
        },
      });

      console.log('✅ Headers created and formatted in Google Sheet');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error ensuring headers:', error.message);
    return false;
  }
}

// Save form data to Google Sheets (non-blocking)
export async function saveFormDataToGoogleSheets(formData) {
  if (!auth) {
    return false; // Silently fail, Excel will handle it
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      return false;
    }

    // Ensure headers exist
    await ensureHeaders(spreadsheetId);

    // Append new row
    const range = 'Sheet1!A:L';
    const newRow = [
      new Date().toLocaleDateString('en-IN'),
      formData.name,
      formData.email,
      formData.phone,
      formData.program,
      formData.graduation,
      formData.passoutYear,
      formData.experienceLevel,
      formData.yearsOfExperience,
      formData.currentCompany,
      formData.message,
      'New Lead',
    ];

    const appendResponse = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [newRow],
      },
    });

    console.log('✅ Form data saved to Google Sheet');
    return true;
  } catch (error) {
    console.warn('⚠️  Google Sheets save skipped:', error.message);
    return false; // Don't throw, let Excel handle it
  }
}

// Get all leads from Google Sheets
export async function getAllLeadsFromGoogleSheets() {
  if (!auth) {
    console.warn('⚠️ Google Sheets not configured');
    return [];
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      return [];
    }

    const range = 'Sheet1!A2:L';
    
    const response = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range,
    });

    if (!response.data.values) {
      return [];
    }

    const leads = response.data.values.map(row => ({
      date: row[0] || '',
      name: row[1] || '',
      email: row[2] || '',
      phone: row[3] || '',
      program: row[4] || '',
      graduation: row[5] || '',
      passoutYear: row[6] || '',
      experienceLevel: row[7] || '',
      yearsOfExperience: row[8] || '',
      currentCompany: row[9] || '',
      message: row[10] || '',
      status: row[11] || '',
    }));

    return leads;
  } catch (error) {
    console.error('❌ Error getting Google Sheets data:', error.message);
    return [];
  }
}

// Share spreadsheet with user
export async function shareSpreadsheetWithUser(email) {
  if (!auth) {
    return false;
  }

  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    if (!spreadsheetId) {
      return false;
    }

    // Create permission for the email
    const drive = google.drive('v3');
    
    await drive.permissions.create({
      auth,
      fileId: spreadsheetId,
      resource: {
        role: 'owner',
        type: 'user',
        emailAddress: email,
      },
      sendNotificationEmail: true,
    });

    console.log(`✅ Spreadsheet shared with ${email}`);
    return true;
  } catch (error) {
    console.error('❌ Error sharing spreadsheet:', error.message);
    // Don't fail on sharing error
    return false;
  }
}
