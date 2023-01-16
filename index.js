const http = require('http');
const port = process.env.PORT || 3000;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = `Server running on http://localhost:${port}/\n`
  res.end(msg);
});

app.get("/get-api", function(req, res) {
    res.status(200).send("Hello World!");
  });
