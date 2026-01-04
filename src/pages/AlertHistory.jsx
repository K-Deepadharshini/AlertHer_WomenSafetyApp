import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AlertHistory = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchAlerts();
  }, []);

  const fetchAlerts = async () => {
    const res = await axios.get("/api/sos/history");
    setAlerts(res.data);
  };

  return (
    <>
      <Navbar />
      <div style={styles.background}>
        <div style={styles.container}>
          <h2 style={styles.title}>Alert History</h2>

          {alerts.length === 0 ? (
            <p style={styles.noAlerts}>No alerts sent yet</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((a, i) => (
                  <tr key={i} style={styles.row}>
                    <td>{new Date(a.createdAt).toLocaleString()}</td>
                    <td>
                      <a
                        href={a.mapLink}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.link}
                      >
                        View Map
                      </a>
                    </td>
                    <td>{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

const styles = {
  background: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9966, #ff5e62)",
    paddingTop: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
  },
  title: {
    marginBottom: "25px",
    color: "#333",
  },
  noAlerts: {
    color: "#555",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  row: {
    borderBottom: "1px solid #eee",
    transition: "background-color 0.3s",
  },
  link: {
    color: "#ff5e62",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

// Optional: you could add hover effect for rows using inline style
// but for full hover effect, CSS or styled-components is better

export default AlertHistory;
