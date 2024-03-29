const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("frontend/dist"));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get("/api/home/", (req, res) => {
  res.send({ data: "HI, Im alive!!" });
});
