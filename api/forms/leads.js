import { getAllLeads } from '../../server/utils/excelUtils.js';
import { getAllLeadsFromGoogleSheets } from '../../server/utils/googleSheetsUtils.js';

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Try Google Sheets first
    const gsLeads = await getAllLeadsFromGoogleSheets();
    
    if (gsLeads && gsLeads.length > 0) {
      return res.json({
        success: true,
        source: 'google-sheets',
        count: gsLeads.length,
        leads: gsLeads
      });
    }

    // Fallback to Excel
    const leads = await getAllLeads();
    res.json({
      success: true,
      source: 'excel',
      count: leads.length,
      leads
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching leads',
      error: error.message
    });
  }
}
