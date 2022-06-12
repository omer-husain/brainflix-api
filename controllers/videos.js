const path = require("path");
const filePath = "./data/videos.json";
const fs = require("fs");

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
  files = fs.readdirSync(path.join(__dirname, "../public/images"));
  return { fileCount: files.length, fileNames: files };
};

const getRandomImage = () => {
  let images = countTotalFilesInDir();
  randomFileIndex = Math.floor(Math.random() * images.fileCount); //generates a random number from 0 to images.fileCount
  let imageName = images.fileNames[randomFileIndex];
  return imageName;
};

module.exports = {
  getVideosFromJSON,
  getVideoById,
  writeNewVideosToJSON,
  countTotalFilesInDir,
  getRandomImage,
};
