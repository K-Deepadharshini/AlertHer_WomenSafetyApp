import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Women Safety Alert</h2>

      <div style={styles.links}>
        {isLoggedIn ? (
          <>
            <Link style={styles.link} to="/dashboard">Dashboard</Link>
            <Link style={styles.link} to="/contacts">Contacts</Link>
            <Link style={styles.link} to="/alerts">Alert History</Link>
            <button onClick={logoutHandler} style={styles.logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link style={styles.link} to="/login">Login</Link>
            <Link style={styles.link} to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#111",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
  },
  logo: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "background 0.3s",
  },
  logout: {
    background: "#ff4d4f",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "background 0.3s",
  }
};

// Optional: add hover effects
styles.link[":hover"] = { backgroundColor: "#333" };
styles.logout[":hover"] = { backgroundColor: "#ff1f1f" };

export default Navbar;
