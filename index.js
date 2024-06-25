const express = require("express");
require("dotenv").config();
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/donations", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${port}`);
});
