import axios from "axios";

export const getUserProfile = async (token) => {
    try {
      const response = await axios.post('http://localhost:8000/profile/', {}, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  };