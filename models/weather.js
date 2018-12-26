// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var weatherSchema = new Schema({
    station_id: Number,
    temperature: String,
    humidity: String,
    light_intensity: String,
    rain_water_level: String,
    pressure: String,
    air_quality: String,
    noise: String,
    gas_detection: String,
    UV: String,
    rain_detection: String,
    rainfall_intensity: String,
    created_at: Date,
    updated_at: Date
});

// ************ Create model
var Weather = mongoose.model('WeatherData', weatherSchema);

// make this available to our users in our Node applications
module.exports = Weather;