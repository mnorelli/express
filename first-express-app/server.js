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

app.get('/',function(req,res){
  res.send("woop!");
});

app.listen(port,function(){
  console.log("running on port",port);
})