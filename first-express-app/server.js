'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

// dummy data
const taquerias = [
  { name: "La Taqueria" },
  { name: "El Farolito" },
  { name: "Taqueria Cancun" }
];



// const http = require('http');

// const server = http.createServer(function(req,res){
//   res.end("woop!")
// });

// server.listen(PORT,function(){
//   console.log("running on port",PORT);
// });

// controllers
function homeController(req, res) { // a controller that handles a specific request
  console.log("home controller hit");
  res.sendFile(__dirname + "/views/index.html");
}

function taqController(req, res) {
  res.json(taquerias); // render all taquerias
}

// Middleware  - Order of events: HTTP Request --> Router --> Middleware --> Controller --> HTTP Response
app.use(function(req, res, next) {
  console.log("middleware hit");
  console.log("%s request to %s", req.method, req.path);
  next();
});

// routes
app.get('/', homeController); // a GET to "/" routes to homeController

// taquerias api index route
app.get('/api/taquerias', taqController);


app.listen(port,function(){
  console.log("running on port",port);
})