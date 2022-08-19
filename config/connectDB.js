const mongoose = require("mongoose");

const options = {
    // autoIndex: false, // Don't build indexes
    // maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    // family: 4 // Use IPv4, skip trying IPv6
};
  
const uri = 'mongodb+srv://turborvip:mkcapsieumanh12@tuborvip1.kqs8w96.mongodb.net/temp?retryWrites=true&w=majority'

const connection = mongoose.connect(uri, options).then(
    () => { console.table("connect db is success") },
    err => { console.log(err) }
);

require('../src/models/user.model')

module.exports = connection 
