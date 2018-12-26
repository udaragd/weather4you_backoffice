var express = require('express');
var router = express.Router();

var Sensor = require('../models/sensor');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//*********** Save weather data
router.post('/saveSensor', async (req, res) => {

    // create a new user
    let newSensorData = Sensor({
        stationId: req.body.stationId,
        sensorId: req.body.sensorId,
        sensorName: req.body.sensorName,
        activeStatus: req.body.activeStatus,
        created_at: new Date(),
        updated_at: new Date()
    });

    // save the user
    newSensorData.save(function (err) {
        if (err) {
            payload = {
                "status": 0,
                "message": "Sensor Data Added Failed"
            };
        }
        else {
            payload = {
                "status": 1,
                "message": "Sensor Data Added"
            };
        }

        res.send(payload);

    });

});

//*********** Save weather data
router.post('/getStationSensorData', async (req, res) => {

    // user login
    let query = {stationId: req.body.stationId};

    Sensor.find(query, function (err, sensor) {

        if (err) {
            payload = {
                "status": 0,
                "message": "Sensor Data Select Failed"
            };
        }
        else {

            if (sensor.length > 0) {
                payload = {
                    "status": 1,
                    "message": "Sensor Found",
                    "selectedData": sensor
                };
            }
            else {
                payload = {
                    "status": 0,
                    "message": "No Sensor Found",
                    "selectedData": sensor
                };
            }

        }

        res.send(payload);
    });

});

//*********** Save weather data
router.put('/updateSensorStatus', async (req, res) => {

    // user login
    let query_1 = {stationId: req.body.stationId,sensorId: req.body.sensorId};
    let query_2 = {activeStatus: req.body.activeStatus};

    Sensor.findOneAndUpdate(query_1, {$set: query_2}, { new: true } , function (err, sensor) {

        if (err) {
            payload = {
                "status": 0,
                "message": "Sensor Data Update Failed"
            };
        }
        else {

            if (sensor.length > 0) {
                payload = {
                    "status": 1,
                    "message": "Sensor Data Updated",
                    "updatedData": sensor
                };
            }
            else {
                payload = {
                    "status": 0,
                    "message": "Sensor Data Update Failed",
                    "updatedData": sensor
                };
            }

        }

        res.send(payload);
    });


});


module.exports = router;