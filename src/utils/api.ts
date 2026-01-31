// Use same-origin /api in production; allow VITE_API_URL only in local dev
const API_BASE_URL = (() => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocalhost && import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }
    return `${window.location.origin}/api`;
  }
  return import.meta.env.VITE_API_URL || '/api';
})();

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
      const errorText = await response.text();
      let errorMessage = response.statusText || 'Failed to submit form';
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorMessage;
      } catch (e) {
        if (errorText) {
          errorMessage = errorText;
        }
      }
      throw new Error(`Request failed (${response.status}): ${errorMessage}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    const message = error?.message || 'Network error: Unable to reach server';
    throw new Error(message);
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
