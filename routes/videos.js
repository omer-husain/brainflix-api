const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const filePath = "./data/videos.json";

//helper functions

//get data from json file, parse it and  return as array of objects
const getVideosFromJSON = () => JSON.parse(fs.readFileSync(filePath));

//filters through array of objects to find specifc object based on user supplied id and returns it
const getVideoById = (videoId) => {
  let videos = getVideosFromJSON();
  let selectedVideo = videos.filter((video) => video.id === videoId);
  return selectedVideo.length > 0 ? selectedVideo[0] : {};
};

const writeNewVideosToJSON = (video) => {
  let videos = getVideosFromJSON();
  videos.push(video);
  let updatedVideos = JSON.stringify(videos);
  fs.writeFileSync(filePath, updatedVideos);
};

//source: https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/

//Counts number of files in Image directory

const countTotalFilesInDir = () => {
  let counter = 0;
  files = fs.readdirSync(path.join(__dirname, "../public/images"));
  // files.forEach(() => {
  //   counter++;
  // });
  return { fileCount: files.length, fileNames: files };
};

const getRandomImagePath = () => {
  let total = countTotalFilesInDir();
  randomFileIndex = Math.floor(Math.random() * total.fileCount); //generates a random number from 0 to total.fileCount
  let imageName = total.fileNames[randomFileIndex];
  return `${path.join(__dirname, "../public/images/")}${imageName}`;
};

//route

router.get("/:id", (req, res) => {
  res.json(getVideoById(req.params.id));
});

router.get("/", (req, res) => {
  res.json(getVideosFromJSON());
});

router.post("/", (req, res) => {
  let uploadedVideo = {
    title: req.body.title,
    channel: "Sample Channel",
    image: getRandomImagePath(),
    description: req.body.description,
    views: "1000",
    likes: "250,000",
    duration: "3:50",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date(),
    comments: [],
    id: uuidv4(),
  };

  writeNewVideosToJSON(uploadedVideo);
  res.json(getVideosFromJSON());
});

module.exports = router;
