const express = require("express");
const app = express();
const videoRoutes = require("./routes/videos");
const port = 8080;


app.use(express.json());

app.use("/videos", videoRoutes);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
