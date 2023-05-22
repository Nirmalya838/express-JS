const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login');
const msgRoutes = require('./routes/msg');
const contactRoutes =require('./routes/contact')
const successRoutes =require('./routes/success')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/login', loginRoutes);
app.use('/contactus', contactRoutes);
app.use('/',msgRoutes);
app.use('/success', successRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views', 'error.html'));
  });
  

app.listen(3000);
