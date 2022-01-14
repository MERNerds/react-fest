const db = require('./connection');
const { User, Band, Ticket } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        firstName: 'Richard',
        lastName: 'Martin',
        email: 'rmartin@gmail.com',
        password: 'password123'
    });

    console.log('users seeded');

    await Band.deleteMany();

    await Band.insertMany([
        {
            bandName: 'blink-182',
            startTime: '8:00',
            endTime: '8:50',
            date: 'Saturday',
            stage: 'Alternative'
        },
        {
            bandName: 'The Clash',
            startTime: '9:00',
            endTime: '9:50',
            date: 'Saturday',
            stage: 'Alternative'
        },
    ]);

    console.log('bands seeded')

    await Ticket.deleteMany();

    await Ticket.insertMany([
        {
            ticketName: '1 day pass',
            description: 'Good for entry to one day of the festival',
            price: 100.00,
            quantity: 1
        },
        {
            ticketName: '3 day pass',
            description: 'Good for entry to the entire festival',
            price: 250.00,
            quantity: 1
        },
        {
            ticketName: 'VIP pass',
            description: 'Good for entry to the entire festival plus access to the VIP tent',
            price: 500.00,
            quantity: 1
        },
    ]);

    console.log('tickets seeded');


    process.exit();
});