const express = require("express");
const router = express.Router();

//controller functions
const {
  getVideosFromJSON,
  getVideoById,
  writeNewVideosToJSON,
} = require("../controllers/videos");
//middleware
const { createNewVideoObject } = require("../controllers/middleware"); //adds userInputtedObject to req object to be used after

//routes
router.get("/:id", (req, res) => {
  res.json(getVideoById(req.params.id));
});

router.get("/", (req, res) => {
  res.json(getVideosFromJSON());
});

router.post("/", createNewVideoObject, (req, res) => {
  writeNewVideosToJSON(req.userInputtedObject);
  res.json(getVideosFromJSON());
});

//for missing pages
router.get("/*", (req, res) => {
  res.status(404).send("page not found");
});

module.exports = router;
