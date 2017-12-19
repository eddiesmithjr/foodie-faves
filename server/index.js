require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var app = express();
const PORT = process.env || 3000;

app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(PORT, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log(`listening on port ${PORT}!`);
  }
});
