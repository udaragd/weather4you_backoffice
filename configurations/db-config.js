//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
// var mongoDB = 'mongodb://localhost:27017/weatherDatabase';
// var mongoDB = 'mongodb://admin:Neverdown001@82.223.4.90:27017/weatherDatabase';

var mongoDB = 'mongodb://82.223.4.90:27017/weatherDatabase';

// Initializing mongodb connection
// mongoose.connect(Config.db.url, { useNewUrlParser: true });

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
mongoose.connect(mongoDB, {
    'auth':
        {'authSource': 'admin'},
    'user': 'admin',
    'pass': 'Neverdown001'
}).then(
    (res) => {
        console.log('Connected to MongoDB');
    },
    err => {
        console.log('not connected to MongoDB', err);
    }
);
