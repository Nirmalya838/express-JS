const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    res.status(404).send('<p>Error 404</p><h3>Page not found</h3>');
});

module.exports = router;