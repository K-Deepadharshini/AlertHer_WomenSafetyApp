import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Axios global config (set once)
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common["Content-Type"] = "application/json";

// Create Context
const AuthContext = createContext(null);

// Custom Hook
export const useAuth = () => useContext(AuthContext);

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on app start
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  // Fetch logged-in user
  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/auth/me");
      setUser(res.data);
    } catch (error) {
      console.error("User fetch failed:", error.response?.data || error.message);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // Register user
  const register = async (formData) => {
    const res = await axios.post("/api/auth/register", formData);
    const token = res.data.token;

    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await fetchUser();
  };

  // Login user
  const login = async (formData) => {
    const res = await axios.post("/api/auth/login", formData);
    const token = res.data.token;

    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await fetchUser();
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
    setLoading(false);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    isAuthenticated: Boolean(user)
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
