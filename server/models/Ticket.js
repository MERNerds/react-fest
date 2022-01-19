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
    subheader: {
        type: String,
        trim: true
    },
    description1: {
        type: String
    },
    description2: {
        type: String
    },
    description3: {
        type: String
    },
    description4: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 100.00
    },
    buttonText: {
        type: String,
        trim: true
    },
    buttonVariant: {
        type: String,
        trim: true
    }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;