const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res, next) => {
  res.send('<html><form action="/product" method="POST"><input type="text" placeholder="item" name="title"/><button>add</button><input type="number" name="size" placeholder="size"/></form></html>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from express!</h1>')
});

app.listen(3000);
