const express = require("express");
const router = express.Router();

// POST /api/auth/register
router.post("/register", (req, res) => {
  res.json({ message: "Register route working" });
});

// POST /api/auth/login
router.post("/login", (req, res) => {
  res.json({ message: "Login route working" });
});

module.exports = router;
