'use strict'

const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

// const http = require('http');

// const server = http.createServer(function(req,res){
//   res.end("woop!")
// });

// server.listen(PORT,function(){
//   console.log("running on port",PORT);
// });

// controller
function homeController(req, res) { // a controller that handles a specific request
  console.log("home controller hit");
  res.send("You're Home!");
}

// Middleware  - Order of events: HTTP Request --> Router --> Middleware --> Controller --> HTTP Response
app.use(function(req, res, next) {
  console.log("middleware hit");
  console.log("%s request to %s", req.method, req.path);
  next();
});

// route
app.get('/', homeController); // a GET to "/" routes to homeController

app.listen(port,function(){
  console.log("running on port",port);
})