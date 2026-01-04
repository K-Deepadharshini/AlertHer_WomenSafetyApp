const express = require("express");
const {
  sendSOS,
  getAlertHistory
} = require("../controllers/sosController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Send SOS alert
router.post("/send", protect, sendSOS);

// Get SOS alert history
router.get("/history", protect, getAlertHistory);

module.exports = router;
