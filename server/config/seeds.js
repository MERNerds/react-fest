const db = require('./connection');
const { User, Band } = require('../models');

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


    process.exit();
});