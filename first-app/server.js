'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

// dummy data
const taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
]

const cafes = [
{name: "The Dew Drop Inn", rating: 6},
{name: "The Dive", rating: 4},
{name: "Bagdhad Cafe", rating: 9}
]

app.use(express.static('public'));

// Middleware
app.use(function(req, res, next) {
  console.log("middleware hit");
  console.log("%s request to %s", req.method, req.path);
  next();
});

app.get('/', function(req, res) {
  console.log("home controller hit");
  // res.send("You're Home!");
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/about', function(req, res) {
  res.send("I ate at Outerlands with my dad last night.");
});


// taquerias api index route
app.get('/api/taquerias', function (req, res) {
  res.json(taquerias); // render all taquerias
});

//challenge code: cafes route and controller
app.get('/api/cafes/',function(req,res) {
  res.json(cafes);
})

app.listen(port);
console.log('Server started on', port);


