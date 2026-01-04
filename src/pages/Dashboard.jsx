import React from "react";
import Navbar from "../components/Navbar";
import SOSButton from "../components/SOSButton";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div style={styles.background}>
        <div style={styles.container}>
          <h2 style={styles.title}>Welcome, {user?.name}</h2>
          <p style={styles.subtitle}>Press the SOS button in case of emergency</p>
          <SOSButton />
        </div>
      </div>
    </>
  );
};

const styles = {
  background: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: "60px",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  title: {
    color: "#333",
    marginBottom: "15px",
  },
  subtitle: {
    color: "#555",
    marginBottom: "30px",
    fontSize: "16px",
  },
};

export default Dashboard;
