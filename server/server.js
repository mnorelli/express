'use strict'

// dependencies
const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

// dummy data
const taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
]

// middleware
app.use(function(req, res, next) {
  console.log("middleware hit");
  console.log("%s request to %s", req.method, req.path);
  next();
});

// static assets
app.use(express.static('public'));

// home controller
app.get('/', function(req, res) {
  console.log("home controller hit");
  res.sendFile(__dirname + "/views/index.html");
});

// taquerias api index route
app.get('/api/taquerias', function (req, res) {
  res.json(taquerias); // render all taquerias
});

// start server
app.listen(port);
console.log('Server started on', port);