const User = require("../models/User");

// @route GET /api/contacts
exports.getContacts = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.emergencyContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route POST /api/contacts
exports.addContact = async (req, res) => {
  const { name, phone } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.emergencyContacts.push({ name, phone });
    await user.save();
    res.status(201).json(user.emergencyContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route DELETE /api/contacts/:id
exports.deleteContact = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.emergencyContacts = user.emergencyContacts.filter(
      (contact) => contact._id.toString() !== req.params.id
    );
    await user.save();
    res.json(user.emergencyContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
