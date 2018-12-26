var express = require('express');
var router = express.Router();

//***********
router.use('/weather', require('./weather'));
router.use('/user', require('./user'));
router.use('/sensor', require('./sensor'));

module.exports = router;
