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


//*********** Save weather data
router.post('/login', async (req, res) => {

    // user login
    let query = { userEmail: req.body.userEmail,userPassword: req.body.userPassword };

    User.findOne( query , function(err, user) {

        if (err) {
            payload = {
                "status": 0,
                "message": "User Data Select Failed"
            };
        }
        else {

            if(user){
                payload = {
                    "status": 1,
                    "message": "User Found",
                    "selectedData": user
                };
            }
            else{
                payload = {
                    "status": 0,
                    "message": "No User Found",
                    "selectedData": user
                };
            }

        }

        res.send(payload);
    });

});


//*********** Get all weather data
router.get('/getAllUsers', async (req, res) => {

    // get all the weather data

    User.find({}, function(err, weatherData) {
        if (err) {
            payload = {
                "status": 0,
                "WeatherData": "There was an error. Data retrieve unsuccessful."
            };
        }
        else {
            payload = {
                "status": 1,
                "UserData": weatherData
            };
        }

        res.send(payload);

    }).sort({_id:-1}).limit(10);

});

module.exports = router;
