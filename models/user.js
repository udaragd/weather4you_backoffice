// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    userName: String,
    userAddress: String,
    userTelephone:String,
    userStation: String,
    userEmail: String,
    userPassword: String,
    created_at: Date,
    updated_at: Date
});

// ************ Create model
var User = mongoose.model('UserData', userSchema);

// make this available to our users in our Node applications
module.exports = User;