const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/sos", require("./routes/sosRoutes"));

// Health check
app.get("/", (req, res) => {
  res.send("🚨 Women Safety Alert API is running");
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
