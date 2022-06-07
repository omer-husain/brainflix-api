const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("GET with ID");
});

router.get("/", (req, res) => {
  res.send("GET method");
});

router.post("/", (req, res) => {
  res.send("POST method");
});

module.exports = router;
