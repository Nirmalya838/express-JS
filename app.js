const path = require('path');
const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const errorController = require('./controllers/error');
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

app.use(errorController.get404);
  

app.listen(3000);
