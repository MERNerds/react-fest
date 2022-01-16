const db = require('./connection');
const { Band, User, Ticket } = require('../models');

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

        // Hip-Hop April 20th

        {
            bandName: 'Kanye',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 20th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Lil Wayne',
            startTime: '9pm',
            endTime: '10pm',
            date: 'April 20th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'SZA',
            startTime: '8pm',
            endTime: '8:45pm',
            date: 'April 20th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Post Malone',
            startTime: '7pm',
            endTime: '7:45pm',
            date: 'April 20th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Isaiah Rashad',
            startTime: '5:45pm',
            endTime: '6:30pm',
            date: 'April 20th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Don Toliver',
            startTime: '3pm',
            endTime: '3:45pm',
            date: 'April 20th',
            stage: 'Hip-Hop',
        },

        // Hip-Hop April 19th

        {
            bandName: 'Mac Miller',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Migos',
            startTime: '9pm',
            endTime: '10p,',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Cardi B',
            startTime: '8pm',
            endTime: '8:45pm',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Gucci Mane',
            startTime: '7pm',
            endTime: '7:45pm',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },
        {
            bandName: '21 Savage',
            startTime: '5:45pm',
            endTime: '6:30pm',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Rick Ross',
            startTime: '4:15pm',
            endTime: '5pm',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Wale',
            startTime: '3pm',
            endTime: '3:45',
            date: 'April 19th',
            stage: 'Hip-Hop',
        },

        // Hip-Hop April 18th

        {
            bandName: 'Asap Rocky',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 18th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Tyler The Creator',
            startTime: '9pm',
            endTime: '10pm',
            date: 'April 18th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Snoop Dogg',
            startTime: '8pm',
            endTime: '8:45pm',
            date: 'April 18th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Meg Thee Stallion',
            startTime: '5:45pm',
            endTime: '6:30pm',
            date: 'April 18th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'ScHoolboy Q',
            startTime: '4:15pm',
            endTime: '5pm',
            date: 'April 18th',
            stage: 'Hip-Hop',
        },
        {
            bandName: 'Rico Nasty',
            startTime: '3pm',
            endTime: '3:45pm',
            date: 'April 18th',
            stage: 'Hip-Hop',
        },



        // EDM Section


        // EDM April 20th

        {
            bandName: 'Flume',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 20th',
            stage: 'EDM',
        },
        {
            bandName: 'Gallant',
            startTime: '9:30pm',
            endTime: '10:30pm',
            date: 'April 20th',
            stage: 'EDM',
        },
        {
            bandName: 'Above and Beyond',
            startTime: '8:15pm',
            endTime: '9pm',
            date: 'April 20th',
            stage: 'EDM',
        },
        {
            bandName: 'Armin Van Buren',
            startTime: '7:45pm',
            endTime: '8:30pm',
            date: 'April 20th',
            stage: 'EDM',
        },
        {
            bandName: 'Kygo',
            startTime: '6:30pm',
            endTime: '7:15',
            date: 'April 20th',
            stage: 'EDM',
        },
        {
            bandName: 'Dr.Fresch',
            startTime: '5:15pm',
            endTime: '6pm',
            date: 'April 20th',
            stage: 'EDM',
        },
        {
            bandName: 'Griz',
            startTime: '4pm',
            endTime: '4:45',
            date: 'April 20th',
            stage: 'EDM',
        },

        // EDM April 19th 

        {
            bandName: 'Zeds Dead',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 19th',
            stage: 'EDM',
        },
        {
            bandName: 'Space Jesus',
            startTime: '9:30pm',
            endTime: '10:30pm',
            date: 'April 19th',
            stage: 'EDM',
        },
        {
            bandName: 'Rezz',
            startTime: '8:15pm',
            endTime: '9pm',
            date: 'April 19th',
            stage: 'EDM',
        },
        {
            bandName: 'Peekaboo',
            startTime: '7:45pm',
            endTime: '8:30pm',
            date: 'April 19th',
            stage: 'EDM',
        },
        {
            bandName: 'Mija',
            startTime: '6:30pm',
            endTime: '7:15pm',
            date: 'April 19th',
            stage: 'EDM',
        },
        {
            bandName: 'Lucii',
            startTime: '5:15pm',
            endTime: '6pm',
            date: 'April 19th',
            stage: 'EDM',
        },
        {
            bandName: 'Louis the Child',
            startTime: '4pm',
            endTime: '4:45pm',
            date: 'April 19th',
            stage: 'EDM',
        },

        // EDM April 18th

        {
            bandName: 'Tiesto',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 18th',
            stage: 'EDM',
        },
        {
            bandName: 'Slander',
            startTime: '9:30pm',
            endTime: '10:30pm',
            date: 'April 18th',
            stage: 'EDM',
        },
        {
            bandName: 'Ekali',
            startTime: '8:15pm',
            endTime: '9pm',
            date: 'April 18th',
            stage: 'EDM',
        },
        {
            bandName: 'Just A Gen',
            startTime: '7:45pm',
            endTime: '8:30pm',
            date: 'April 18th',
            stage: 'EDM',
        },
        {
            bandName: 'San Holo',
            startTime: '6:30pm',
            endTime: '7:15pm',
            date: 'April 18th',
            stage: 'EDM',
        },
        {
            bandName: 'Kai Wachi',
            startTime: '5:15pm',
            endTime: '6pm',
            date: 'April 18th',
            stage: 'EDM',
        },
        {
            bandName: 'Destructo',
            startTime: '4pm',
            endTime: '4:45pm',
            date: 'April 18th',
            stage: 'EDM',
        },



        // Alternative/Rock Section


        // Alternative/Rock April 20th

        {
            bandName: 'Blink-182',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'My Chemical Romance',
            startTime: '9:45pm',
            endTime: '10:45pm',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'A Day to Remember',
            startTime: '8:30pm',
            endTime: '9:15pm',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Neck Deep',
            startTime: '7:15pm',
            endTime: '8pm',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Bad Religion',
            startTime: '6pm',
            endTime: '6:45pm',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'New Found Glory',
            startTime: '4:45pm',
            endTime: '5:30pm',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Hot Mulligan',
            startTime: '3:30pm',
            endTime: '4:15pm',
            date: 'April 20th',
            stage: 'Alternative/Rock',
        },

        // Alternative/Rock April 19th

        {
            bandName: 'Manchester Orchestra',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Mumford and Sons',
            startTime: '9:45pm',
            endTime: '10:45pm',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Peach Pit',
            startTime: '8:30pm',
            endTime: '9:15pm',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'The Strokes',
            startTime: '7:15pm',
            endTime: '8pm',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'The Front Bottoms',
            startTime: '6pm',
            endTime: '6:45pm',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'The Wood Brothers',
            startTime: '4:45pm',
            endTime: '5:30pm',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Punch Brothers',
            startTime: '3:30pm',
            endTime: '4:15pm',
            date: 'April 19th',
            stage: 'Alternative/Rock',
        },

        // Alternative/Rock April 18th

        {
            bandName: 'Red Hot Chili Peppers',
            startTime: '11pm',
            endTime: '12am',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'The Clash',
            startTime: '9:45pm',
            endTime: '10:45pm',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Weezer',
            startTime: '8:30pm',
            endTime: '9:15pm',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Beastie Boys',
            startTime: '7:15pm',
            endTime: '8pm',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'The Sparks',
            startTime: '6pm',
            endTime: '6:45pm',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'The Wonder Years',
            startTime: '4:45pm',
            endTime: '5:30pm',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },
        {
            bandName: 'Evanescence',
            startTime: '3:30pm',
            endTime: '4:15pm',
            date: 'April 18th',
            stage: 'Alternative/Rock',
        },

    ]);

    console.log('Bands seeded');

    await Ticket.deleteMany();

    await Ticket.insertMany([
        {
            ticketName: '1 day pass',
            description1: '21 bands each day on 3 stages',
            description2: 'Food choices from local vendors',
            description3: 'Bars and Merch',
            description4: 'Free water stations',
            price: 100.00,
            buttonText: 'Lets',
            buttonVariant: 'outlined'
        },
        {
            ticketName: '3 day pass',
            subheader: 'Limited Tickets Remaining!',
            description1: '60+ bands on 3 amazing stages',
            description2: '30+ food vendors',
            description3: 'Bars and Merch',
            description4: 'Free water stations',
            price: 250.00,
            buttonText: 'Get',
            buttonVariant: 'contained'
        },
        {
            ticketName: 'VIP pass',
            description1: '60+ bands on 3 amazing stages',
            description2: 'Access to 2 VIP lounges',
            description3: '3 free drink tickets daily',
            description4: 'Commemorative wristbands',
            price: 500.00,
            buttonText: 'Rocking',
            buttonVariant: 'outlined'
        },
    ]);

    console.log('tickets seeded');

    process.exit();

});

