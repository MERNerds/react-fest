// band name
// set time start
// set time end
// date they play
// _id
// stage

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bandSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    date: {
        type: String,
    }

});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;