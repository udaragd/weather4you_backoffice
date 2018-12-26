// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var sensorSchema = new Schema({
    stationId: String,
    sensorId: String,
    sensorName:String,
    activeStatus: String,
    created_at: Date,
    updated_at: Date
});

// ************ Create model
var Sensor = mongoose.model('SensorData', sensorSchema);

// make this available to our users in our Node applications
module.exports = Sensor;

