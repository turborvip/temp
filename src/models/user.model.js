const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        required: true,
        type: Number
    },
});
module.exports = mongoose.model('users', schema,);