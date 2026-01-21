import ExcelJS from 'exceljs';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EXCEL_FILE_PATH = join(__dirname, '../leads.xlsx');

// Initialize or get workbook
async function getOrCreateWorkbook() {
  let workbook;
  
  if (existsSync(EXCEL_FILE_PATH)) {
    workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(EXCEL_FILE_PATH);
  } else {
    workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Leads');
    
    // Add headers
    const headers = ['Date', 'Name', 'Email', 'Phone', 'Program', 'Graduation', 'Passout Year', 'Experience Level', 'Years of Experience', 'Current Company', 'Message', 'Status'];
    worksheet.addRow(headers);
    
    // Style headers
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4472C4' }
    };
    headerRow.alignment = { horizontal: 'center', vertical: 'center' };
    
    // Set column widths
    worksheet.columns = [
      { width: 15 },
      { width: 20 },
      { width: 25 },
      { width: 15 },
      { width: 25 },
      { width: 20 },
      { width: 15 },
      { width: 18 },
      { width: 18 },
      { width: 20 },
      { width: 30 },
      { width: 15 }
    ];
  }
  
  return workbook;
}

// Save form data to Excel
export async function saveFormDataToExcel(formData) {
  try {
    const workbook = await getOrCreateWorkbook();
    const worksheet = workbook.getWorksheet('Leads');
    
    const row = worksheet.addRow([
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
      'New Lead'
    ]);
    
    // Style the data row
    row.alignment = { horizontal: 'left', vertical: 'center' };
    row.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFF2F2F2' }
    };
    
    await workbook.xlsx.writeFile(EXCEL_FILE_PATH);
    console.log('✅ Form data saved to Excel');
    return true;
  } catch (error) {
    console.error('❌ Error saving to Excel:', error);
    throw error;
  }
}

// Get all leads
export async function getAllLeads() {
  try {
    if (!existsSync(EXCEL_FILE_PATH)) {
      return [];
    }
    
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(EXCEL_FILE_PATH);
    const worksheet = workbook.getWorksheet('Leads');
    
    const leads = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header
      
      leads.push({
        date: row.getCell(1).value,
        name: row.getCell(2).value,
        email: row.getCell(3).value,
        phone: row.getCell(4).value,
        program: row.getCell(5).value,
        graduation: row.getCell(6).value,
        passoutYear: row.getCell(7).value,
        experienceLevel: row.getCell(8).value,
        yearsOfExperience: row.getCell(9).value,
        currentCompany: row.getCell(10).value,
        message: row.getCell(11).value,
        status: row.getCell(12).value
      });
    });
    
    return leads;
  } catch (error) {
    console.error('❌ Error reading Excel:', error);
    throw error;
  }
}
