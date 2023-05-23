const path = require('path');
const express = require('express');
const contactController = require('../controllers/misc');
const router = express.Router();

router.get('/', contactController.contactUs);

module.exports = router;