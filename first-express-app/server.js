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
  res.send("You're Home!");
}
// route
app.get('/', homeController); // a GET to "/" routes to homeController

app.listen(port,function(){
  console.log("running on port",port);
})