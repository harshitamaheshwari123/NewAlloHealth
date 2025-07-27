const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phone: String,
  email: String,
  reason: String,
  doctor: { type: String, required: true },
  queueNumber: { type: Number, required: true, unique: true },
  status: {
    type: String,
    enum: ["waiting", "with-doctor", "completed"],
    default: "waiting",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Queue", queueSchema);
