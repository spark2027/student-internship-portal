
const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// POST: Store application
router.post("/", async (req, res) => {
  try {
    const { name, email, rollNumber, internship } = req.body;

    if (!name?.trim() || !email?.trim() ||
        !rollNumber?.trim() || !internship?.trim()) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const application = new Application({
      name,
      email,
      rollNumber,
      internship
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully",
      application
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to submit application",
      error: error.message
    });
  }
});

// GET: Retrieve all applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve applications"
    });
  }
});

module.exports = router;
