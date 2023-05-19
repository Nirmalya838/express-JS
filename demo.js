const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
  console.log("in the middlewire!");
  next();
});

app.use((req, res, next)=>{
  console.log("asan hain!");
  res.send('<h1>Hello There</h1>');
});

const server = http.createServer(app);

app.listen(3000);
