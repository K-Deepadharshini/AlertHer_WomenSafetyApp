import React, { useState } from "react";
import axios from "axios";
import getLocation from "../utils/getLocation";

const SOSButton = () => {
  const [loading, setLoading] = useState(false);

  const sendSOS = async () => {
    try {
      setLoading(true);

      // 1️⃣ Get current location
      const location = await getLocation();

      // 2️⃣ Send SOS request to backend
      await axios.post(
        "http://localhost:5000/api/sos/send",
        {
          latitude: location.latitude,
          longitude: location.longitude
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json"
          }
        }
      );

      alert("🚨 Emergency Alert Sent Successfully!");
    } catch (error) {
      console.error(
        "SOS ERROR:",
        error.response?.data || error.message
      );
      alert("Failed to send SOS alert");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <button
        onClick={sendSOS}
        style={styles.button}
        disabled={loading}
      >
        {loading ? "Sending..." : "SOS"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  button: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "#fff",
    fontSize: "36px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(255,0,0,0.8)"
  }
};

export default SOSButton;
