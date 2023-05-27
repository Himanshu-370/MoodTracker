const express = require("express");
const router = express.Router();
const moment = require("moment");

require("../db/connectDB");

const Mood = require("../model/moodSchema");

const moodMapping = {
  1: "Rough Day",
  2: "Not Good",
  3: "Not Bad",
  4: "Good",
  5: "Great",
};

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
  const { id } = req.query;

  try {
    if (id) {
      const mood = await Mood.findById(id);

      if (mood) {
        // console.log(mood.date.toISOString());
        res.status(200).json({ mood: mood });
      } else {
        res.status(404).json({ error: "Mood not found" });
      }
    } else {
      res.status(400).json({ error: "ID is required" });
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

//apiendpoint for retrieving mood related statistics such as avg mood, mood distribution, etc.
router.get("/mood/average", async (req, res) => {
  const { month, year, id } = req.query;

  try {
    if (!month || !year) {
      return res.status(400).json({ error: "Month and year are required" });
    }

    // Get the start and end dates of the month
    const startDate = moment(`${year}-${month}-01`).startOf("month").toDate();
    const endDate = moment(`${year}-${month}-01`).endOf("month").toDate();

    const query = id ? { _id: id } : { date: { $gte: startDate, $lte: endDate } };
    const moods = await Mood.find(query);

    const totalMoods = moods.length;

    if (totalMoods === 0) {
      return res.status(404).json({ error: "No mood data available for the given month" });
    }

    // Calculate the sum of mood values
    let moodSum = 0;

    if (id) {
      // Retrieve the mood value for the specified ID
      const mood = moods[0];
      moodSum = mood.mood;
    } else {
      // Calculate the sum of mood values for the month
      moodSum = moods.reduce((sum, mood) => sum + mood.mood, 0);
    }

    // Calculate the average mood
    const averageMood = Math.round(moodSum / totalMoods);

    res.status(200).json({ averageMood, moodDescription: moodMapping[averageMood] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
