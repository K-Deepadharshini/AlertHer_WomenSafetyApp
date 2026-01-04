import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "" });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await axios.get("/api/contacts");
    setContacts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/contacts", form);
    setForm({ name: "", phone: "" });
    fetchContacts();
  };

  return (
    <>
      <Navbar />
      <div style={styles.background}>
        <div style={styles.container}>
          <h2 style={styles.title}>Emergency Contacts</h2>

          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={styles.input}
              required
            />
            <input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Add Contact
            </button>
          </form>

          <ul style={styles.list}>
            {contacts.map((c, i) => (
              <li key={i} style={styles.listItem}>
                <span style={styles.contactName}>{c.name}</span>
                <span style={styles.contactPhone}>{c.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const styles = {
  background: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #43cea2, #185a9d)",
    display: "flex",
    justifyContent: "center",
    paddingTop: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  title: {
    marginBottom: "25px",
    color: "#333",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    flex: "1 1 40%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#43cea2",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  contactName: {
    fontWeight: "bold",
    color: "#333",
  },
  contactPhone: {
    color: "#555",
  },
};

export default Contacts;
