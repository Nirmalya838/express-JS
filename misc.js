const path = require('path');

exports.contactUs = (req, res, next) => {
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        formsCSS: true,
        productCSS: true,
        activeContactUs: true
    });
  };

  exports.success = (req, res, next) => {
    res.render('success', {
        pageTitle: 'Success',
        path: '/success',
        formsCSS: true,
        productCSS: true,
        activeContactUs: true
    });
  };