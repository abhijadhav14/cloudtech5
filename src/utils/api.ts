const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export async function submitForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/forms/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }

    return await response.json();
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
