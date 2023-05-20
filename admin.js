const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><form action="/admin/add-product" method="POST"><input type="text" placeholder="item" name="title"/><button>add</button><input type="number" name="size" placeholder="size"/></form></html>');
  });
  
  router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module.exports = router;