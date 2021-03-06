const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

app.get("/testdata", (req, res) => {
  const buffer = fs.readFileSync("src/test-data.json");
  const json_string = buffer.toString();
  const json = JSON.parse(json_string);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.contentType("application/json").send(json);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
