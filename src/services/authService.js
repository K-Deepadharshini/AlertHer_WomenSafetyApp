import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common["Authorization"] =
      `Bearer ${response.data.token}`;
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    axios.defaults.headers.common["Authorization"] =
      `Bearer ${response.data.token}`;
  }

  return response.data;
};

// Get logged-in user
const getProfile = async () => {
  const response = await axios.get(`${API_URL}/me`);
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
};

const authService = {
  register,
  login,
  getProfile,
  logout
};

export default authService;
