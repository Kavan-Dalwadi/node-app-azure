const http = require('http');
const port = process.env.PORT || 3000;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/get-api", function(req, res) {
    console.log(req)
    console.log("Heloooooooooooooooooo!")
    res.status(200).send("Hello World!");
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
