const express = require("express");
const router = express.Router();

// GET /api/records
router.get("/", (req, res) => {
  res.json({ message: "Get all records" });
});

// POST /api/records
router.post("/", (req, res) => {
  res.json({ message: "Create record" });
});

// PUT /api/records/:id
router.put("/:id", (req, res) => {
  res.json({ message: "Update record " + req.params.id });
});

// DELETE /api/records/:id
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete record " + req.params.id });
});

module.exports = router;
