const { v4: uuidv4 } = require("uuid");
const { getRandomImage } = require("./videos");

const createNewVideoObject = (req, res, next) => {
  let reqObject = {
    title: req.body.title,
    channel: "Sample Channel",
    image: `http://localhost:${
      process.env.PORT
    }/public/images/${getRandomImage()}`,
    description: req.body.description,
    views: "1000",
    likes: "250,000",
    duration: "3:50",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date(),
    comments: [
      {
        name: "Mattie Casarez",
        comment:
          "This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.",
        likes: 0,
        timestamp: 1625250720000,
      },
      {
        name: "Taylor Jade",
        comment:
          "Excellent tips! Another idea is to keep all of your important belongings like your passport inside a waterproof bag. Perfect for those last minute trips to the beach, trust me.",
        likes: 0,
        timestamp: 1625238122000,
      },
      {
        name: "Adnan Natt",
        comment:
          "Who ever knew travel could be so easy? Looking forward to getting to put this into practice when I fly away in the near future. Wish me good luck!",
        likes: 0,
        timestamp: 1625177192000,
      },
    ],
    id: uuidv4(),
  };
  req.userInputtedObject = reqObject;
  next();
};

module.exports = { createNewVideoObject };
