import axios from 'axios';

const BASE_URL = 'https://miraplay-test-server-sqsv.onrender.com/api';

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  