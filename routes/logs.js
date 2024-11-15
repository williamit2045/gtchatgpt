const express = require("express");
const router = express.Router();
const { db } = require("../db/logger"); // Import the database instance from logger.js

// Route to fetch recent error logs
router.get("/", (req, res) => {
  try {
    const logs = db.prepare("SELECT * FROM error_logs ORDER BY createdAt DESC LIMIT 50").all();
    res.json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).send("Could not retrieve logs.");
  }
});

module.exports = router;
