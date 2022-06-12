require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const videoRoutes = require("./routes/videos");

const port = process.env.PORT;

//middleware

//for server to under JSON data
app.use(express.json());

//to solve CORS error (CROSS Origin)
app.use(cors());

//to server static files on public folder - __dirname using path.join allows to get correct absolute path to public folder
app.use("/public", express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));

//using middle ware to get video routes in separate file for better readilbiily and structire
app.use("/videos", videoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
