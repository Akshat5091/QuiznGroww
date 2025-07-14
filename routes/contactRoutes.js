const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contactController.js');

router.post('/', handleContactForm);

module.exports = router;
