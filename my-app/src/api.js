import axios from 'axios';

const BASE_URL = 'https://octalogic-test-frontend.vercel.app/api/v1';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchVehicleTypes = async () => {
  try {
    const response = await api.get('/vehicleTypes');
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle types:', error);
    throw error;
  }
};

// Add more functions to fetch other data from the API as needed

export default api;
