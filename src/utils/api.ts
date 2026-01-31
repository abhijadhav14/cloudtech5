// Use /api for both development and production (Vercel serverless functions)
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  '/api';

export async function submitForm(formData) {
  try {
    console.log('Submitting form to:', `${API_BASE_URL}/forms/submit`);
    console.log('Form data:', formData);
    
    const response = await fetch(`${API_BASE_URL}/forms/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      let errorMessage = 'Failed to submit form';
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorMessage;
      } catch (e) {
        errorMessage = errorText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('Success response:', result);
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}

export async function getLeads() {
  try {
    const response = await fetch(`${API_BASE_URL}/forms/leads`);

    if (!response.ok) {
      throw new Error('Failed to fetch leads');
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch leads error:', error);
    throw error;
  }
}
