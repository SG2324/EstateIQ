const express = require("express");
const router = express.Router();

console.log("🚀 users.js file loaded");

router.get("/", (req, res) => {
  res.json([]);
});

router.post("/", (req, res) => {
  res.json({
    message: "POST users working",
    received: req.body
  });
});

module.exports = router;
