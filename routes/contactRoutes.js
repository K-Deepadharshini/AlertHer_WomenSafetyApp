const express = require("express");
const {
  addContact,
  getContacts,
  deleteContact
} = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Add emergency contact
router.post("/", protect, addContact);

// Get all emergency contacts
router.get("/", protect, getContacts);

// Delete emergency contact
router.delete("/:id", protect, deleteContact);

module.exports = router;
