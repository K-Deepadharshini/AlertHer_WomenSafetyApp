const { client, twilioPhone } = require("../config/twilio");

const sendSMS = async (to, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhone,
      to
    });

    console.log(`✅ SMS sent to ${to}`);
    return response;
  } catch (error) {
    console.error("❌ SMS Error:", error.message);
    throw new Error("SMS sending failed");
  }
};

module.exports = sendSMS;
