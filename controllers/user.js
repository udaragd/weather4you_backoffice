var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//*********** Save weather data
router.post('/saveUser', async (req, res) => {

    // create a new user
    var newUserData = User({
        userName: req.body.userName,
        userAddress: req.body.userAddress,
        userTelephone: req.body.userTelephone,
        userStation: req.body.userStation,
        userEmail: req.body.userEmail,
        userPassword: req.body.userPassword,
        created_at: new Date(),
        updated_at: new Date()
    });

    // save the user
    newUserData.save(function (err) {
        if (err) {
            payload = {
                "status": 0,
                "message": "User Data Added Failed"
            };

            console.log('test - ', err);
        }
        else {
            payload = {
                "status": 1,
                "message": "User Data Added"
            };
        }

        res.send(payload);

    });

});