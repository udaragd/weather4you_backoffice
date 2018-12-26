var express = require('express');
var router = express.Router();

var Weather = require('../models/weather');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//*********** Save weather data
router.post('/saveWeatherData', async (req, res) => {

    // create a new user
    var newWeatherData = Weather({
        station_id: req.body.station_id,
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        light_intensity: req.body.light_intensity,
        rain_water_level: req.body.rain_water_level,
        pressure: req.body.pressure,
        air_quality: req.body.air_quality,
        noise: req.body.noise,
        gas_detection: req.body.gas_detection,
        uv: req.body.uv,
        rain_detection: req.body.rain_detection,
        rainfall_intensity: req.body.rainfall_intensity,
        created_at: new Date(),
        updated_at: new Date()
    });

    // save the user
    newWeatherData.save(function (err) {
        if (err) {
            payload = {
                "status": 0,
                "message": "Weather Data Added Failed"
            };

            console.log('test - ',err);
        }
        else {
            payload = {
                "status": 1,
                "message": "Weather Data Added"
            };
        }

        res.send(payload);

    });

});


//*********** Get all weather data
router.get('/getAllWeatherData', async (req, res) => {

    // get all the weather data

    Weather.find({}, function(err, weatherData) {
        if (err) {
            payload = {
                "status": 0,
                "WeatherData": "There was an error. Data retrieve unsuccessful."
            };
        }
        else {
            payload = {
                "status": 1,
                "WeatherData": weatherData
            };
        }

        res.send(payload);

    }).sort({_id:-1}).limit(10);

});


module.exports = router;
