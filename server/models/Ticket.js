// ticket name
// description
// price
// quantity

const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
    ticketName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 100.00
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    }
});

const Tickets = mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;