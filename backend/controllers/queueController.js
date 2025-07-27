const express = require("express");
const Queue = require("../models/queue.model");
const router = express.Router();

// Get next queue number
async function getNextQueueNumber() {
  const last = await Queue.findOne().sort({ queueNumber: -1 });
  return last ? last.queueNumber + 1 : 1;
}

// Add new patient to queue
router.post("/", async (req, res) => {
  try {
    const queueNumber = await getNextQueueNumber();
    const newEntry = new Queue({ ...req.body, queueNumber });
    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all patients in queue
router.get("/", async (req, res) => {
  try {
    const queue = await Queue.find().sort({ queueNumber: 1 });
    res.status(200).json(queue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update patient status
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Queue.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
