const db = require('./connection');
const { Band } = require('../models');

db.once('open', async () => {
const bands = await Band.insertMany ([

    // Hip-Hop April 20th

    {
        text: 'Kanye',
        startDate: '11pm',
        endDate: '12am',
        description: 'Hip-Hop',
    },
    {
        text: 'Lil Wayne',
        startDate: '9pm',
        endDate: '10pm',
        description: 'Hip-Hop',
    },
    {
        text: 'SZA',
        startDate: '8pm',
        endDate: '8:45pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Post Malone',
        startDate: '7pm',
        endDate: '7:45pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Isaiah Rashad',
        startDate: '5:45pm',
        endDate: '6:30pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Don Toliver',
        startDate: '3pm',
        endDate: '3:45pm',
        description: 'Hip-Hop',
    },

    // Hip-Hop April 19th

    {
        text: 'Mac Miller',
        startDate: '11pm',
        endDate: '12am',
        description: 'Hip-Hop',
    },
    {
        text: 'Migos',
        startDate: '9pm',
        endDate: '10p,',
        description: 'Hip-Hop',
    },
    {
        text: 'Cardi B',
        startDate: '8pm',
        endDate: '8:45pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Gucci Mane',
        startDate: '7pm',
        endDate: '7:45pm',
        description: 'Hip-Hop',
    },
    {
        text: '21 Savage',
        startDate: '5:45pm',
        endDate: '6:30pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Rick Ross',
        startDate: '4:15pm',
        endDate: '5pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Wale',
        startDate: '3pm',
        endDate: '3:45',
        description: 'Hip-Hop',
    },
    
    // Hip-Hop April 18th

    {
        text: 'Asap Rocky',
        startDate: '11pm',
        endDate: '12am',
        description: 'Hip-Hop',
    },
    {
        text: 'Tyler The Creator',
        startDate: '9pm',
        endDate: '10pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Snoop Dogg',
        startDate: '8pm',
        endDate: '8:45pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Meg Thee Stallion',
        startDate: '5:45pm',
        endDate: '6:30pm',
        description: 'Hip-Hop',
    },
    {
        text: 'ScHoolboy Q',
        startDate: '4:15pm',
        endDate: '5pm',
        description: 'Hip-Hop',
    },
    {
        text: 'Rico Nasty',
        startDate: '3pm',
        endDate: '3:45pm',
        description: 'Hip-Hop',
    },



    // EDM Section
    

    // EDM April 20th

    {
        text: 'Flume',
        startDate: '11pm',
        endDate: '12am',
        description: 'EDM',
    },
    {
        text: 'Gallant',
        startDate: '9:30pm',
        endDate: '10:30pm',
        description: 'EDM',
    },
    {
        text: 'Above and Beyond',
        startDate: '8:15pm',
        endDate: '9pm',
        description: 'EDM',
    },
    {
        text: 'Armin Van Buren',
        startDate: '7:45pm',
        endDate: '8:30pm',
        date: 'April 20th',
        description: 'EDM',
    },
    {
        text: 'Kygo',
        startDate: '6:30pm',
        endDate: '7:15',
        description: 'EDM',
    },
    {
        text: 'Dr.Fresch',
        startDate: '5:15pm',
        endDate: '6pm',
        description: 'EDM',
    },
    {
        text: 'Griz',
        startDate: '4pm',
        endDate: '4:45',
        description: 'EDM',
    },

    // EDM April 19th 

    {
        text: 'Zeds Dead',
        startDate: '11pm',
        endDate: '12am',
        description: 'EDM',
    },
    {
        text: 'Space Jesus',
        startDate: '9:30pm',
        endDate: '10:30pm',
        description: 'EDM',
    },
    {
        text: 'Rezz',
        startDate: '8:15pm',
        endDate: '9pm',
        description: 'EDM',
    },
    {
        text: 'Peekaboo',
        startDate: '7:45pm',
        endDate: '8:30pm',
        description: 'EDM',
    },
    {
        text: 'Mija',
        startDate: '6:30pm',
        endDate: '7:15pm',
        description: 'EDM',
    },
    {
        text: 'Lucii',
        startDate: '5:15pm',
        endDate: '6pm',
        description: 'EDM',
    },
    {
        text: 'Louis the Child',
        startDate: '4pm',
        endDate: '4:45pm',
        description: 'EDM',
    },

    // EDM April 18th

    {
        text: 'Tiesto',
        startDate: '11pm',
        endDate: '12am',
        description: 'EDM',
    },
    {
        text: 'Slander',
        startDate: '9:30pm',
        endDate: '10:30pm',
        description: 'EDM',
    },
    {
        text: 'Ekali',
        startDate: '8:15pm',
        endDate: '9pm',
        description: 'EDM',
    },
    {
        text: 'Just A Gen',
        startDate: '7:45pm',
        endDate: '8:30pm',
        description: 'EDM',
    },
    {
        text: 'San Holo',
        startDate: '6:30pm',
        endDate: '7:15pm',
        description: 'EDM',
    },
    {
        text: 'Kai Wachi',
        startDate: '5:15pm',
        endDate: '6pm',
        description: 'EDM',
    },
    {
        text: 'Destructo',
        startDate: '4pm',
        endDate: '4:45pm',
        description: 'EDM',
    },



    // Alternative/Rock Section
    

    // Alternative/Rock April 20th

    {
        text: 'Blink-182',
        startDate: '11pm',
        endDate: '12am',
        description: 'Alternative/Rock',
    },
    {
        text: 'My Chemical Romance',
        startDate: '9:45pm',
        endDate: '10:45pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'A Day to Remember',
        startDate: '8:30pm',
        endDate: '9:15pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Neck Deep',
        startDate: '7:15pm',
        endDate: '8pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Bad Religion',
        startDate: '6pm',
        endDate: '6:45pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'New Found Glory',
        startDate: '4:45pm',
        endDate: '5:30pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Hot Mulligan',
        startDate: '3:30pm',
        endDate: '4:15pm',
        description: 'Alternative/Rock',
    },

    // Alternative/Rock April 19th

    {
        text: 'Manchester Orchestra',
        startDate: '11pm',
        endDate: '12am',
        description: 'Alternative/Rock',
    },
    {
        text: 'Mumford and Sons',
        startDate: '9:45pm',
        endDate: '10:45pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Peach Pit',
        startDate: '8:30pm',
        endDate: '9:15pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'The Strokes',
        startDate: '7:15pm',
        endDate: '8pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'The Front Bottoms',
        startDate: '6pm',
        endDate: '6:45pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'The Wood Brothers',
        startDate: '4:45pm',
        endDate: '5:30pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Punch Brothers',
        startDate: '3:30pm',
        endDate: '4:15pm',
        description: 'Alternative/Rock',
    },

    // Alternative/Rock April 18th

    {
        text: 'Red Hot Chili Peppers',
        startDate: '11pm',
        endDate: '12am',
        description: 'Alternative/Rock',
    },
    {
        text: 'The Clash',
        startDate: '9:45pm',
        endDate: '10:45pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Weezer',
        startDate: '8:30pm',
        endDate: '9:15pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Beastie Boys',
        startDate: '7:15pm',
        endDate: '8pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'The Sparks',
        startDate: '6pm',
        endDate: '6:45pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'The Wonder Years',
        startDate: '4:45pm',
        endDate: '5:30pm',
        description: 'Alternative/Rock',
    },
    {
        text: 'Evanescence',
        startDate: '3:30pm',
        endDate: '4:15pm',
        description: 'Alternative/Rock',
    },
    
]);

console.log('Bands seeded');

process.exit();

});