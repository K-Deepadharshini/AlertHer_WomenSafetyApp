const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    latitude: {
      type: Number,
      required: true
    },

    longitude: {
      type: Number,
      required: true
    },

    mapLink: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["Sent", "Failed"],
      default: "Sent"
    },

    sentTo: [
      {
        name: { type: String },
        phone: { type: String }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Alert", alertSchema);
