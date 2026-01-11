const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    phase: "0",
    day: "4",
    message: "Modular routes working"
  });
});

module.exports = router;
