const express = require("express");
const router = express.Router();

require("../db/connectDB");

const Mood = require("../model/moodSchema");

router.post("/mood", async (req, res) => {
  const { mood, note } = req.body;

  if (!mood) {
    return res.status(400).json({ error: "Mood is required" });
  }

  try {
    const createdMood = await Mood.create({ mood, note });
    res.status(201).json({ mood: createdMood, note: note });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/mood", async (req, res) => {
  const { date } = req.query;

  try {
    if (date) {
      const moods = await Mood.findOne({
        date: { date: new Date(date) },
      });
      res.status(200).json({ moods: moods });
    } else {
      res.status(400).json({ error: "Date is required" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

//update Mood api endpoint using ID
router.put("/mood/:id", async (req, res) => {
  const { id } = req.params;
  const { mood, note } = req.body;

  try {
    const updatedMood = await Mood.findByIdAndUpdate(
      id,
      { mood, note },
      { new: true }
    );

    if (updatedMood) {
      res.status(200).json({ mood: updatedMood });
    } else {
      res.status(404).json({ error: "Mood entry not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

//delete Mood api endpoint using ID
router.delete("/mood/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMood = await Mood.findByIdAndDelete(id);

    if (deletedMood) {
      res.status(200).json({ message: "Mood entry deleted" });
    } else {
      res.status(404).json({ error: "Mood entry not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
