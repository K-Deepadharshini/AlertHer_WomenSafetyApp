const Alert = require("../models/Alert");
const User = require("../models/User");
const { client, twilioPhone } = require("../config/twilio");

// @desc    Send SOS alert
// @route   POST /api/sos/send
// @access  Private
exports.sendSOS = async (req, res) => {
  const { latitude, longitude } = req.body;

  // 1️⃣ Validate location
  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Location data (latitude, longitude) is required"
    });
  }

  try {
    // 2️⃣ Fetch logged-in user
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 3️⃣ Check emergency contacts
    if (!user.emergencyContacts || user.emergencyContacts.length === 0) {
      return res.status(400).json({
        message: "No emergency contacts found"
      });
    }

    // 4️⃣ Prepare alert message
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const message = `🚨 EMERGENCY ALERT 🚨
${user.name} needs help immediately.

Live Location:
${mapLink}`;

    // 5️⃣ Send SMS to each contact
    for (const contact of user.emergencyContacts) {
      if (!contact.phone) continue;

      await client.messages.create({
        body: message,
        from: twilioPhone,
        to: contact.phone
      });
    }
    // 6️⃣ Save alert history
const alert = await Alert.create({
  user: user._id,
  latitude,
  longitude,
  mapLink,
  status: "Sent",
  sentTo: user.emergencyContacts // save all emergency contacts
});

    // 7️⃣ Success response
    res.status(200).json({
      success: true,
      message: "SOS alert sent successfully",
      alert
    });
  } catch (error) {
    console.error("SOS SEND ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send SOS alert",
      error: error.message
    });
  }
};

// @desc    Get SOS alert history
// @route   GET /api/sos/history
// @access  Private
exports.getAlertHistory = async (req, res) => {
  try {
    const alerts = await Alert.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json(alerts);
  } catch (error) {
    console.error("ALERT HISTORY ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch alert history",
      error: error.message
    });
  }
};
