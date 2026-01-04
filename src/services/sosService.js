import axios from "axios";

const API_URL = "http://localhost:5000/api/sos";

// Send SOS alert
const sendSOS = async (locationData) => {
  const response = await axios.post(`${API_URL}/send`, locationData);
  return response.data;
};

// Get SOS alert history
const getAlertHistory = async () => {
  const response = await axios.get(`${API_URL}/history`);
  return response.data;
};

const sosService = {
  sendSOS,
  getAlertHistory
};

export default sosService;
