'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send("You're Home!");
});

app.get('/about', function(req, res) {
  res.send("I ate at Outerlands with my dad last night.");
});


app.listen(port);
console.log('Server started on', port);
