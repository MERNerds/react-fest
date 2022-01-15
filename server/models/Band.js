// band name
// set time start
// set time end
// date they play
// _id
// stage

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bandSchema = new Schema({
    bandName: {
        type: String,
        required: true,
        trim: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true,
    }

});

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;