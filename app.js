const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const msgRoutes = require('./routes/msg');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/login', loginRoutes);
app.use('/',msgRoutes);

app.use((req, res, next) => {
    res.status(404).send('<p>Error 404</p><h3>Page not found</h3>');
  });
  

app.listen(3000);
