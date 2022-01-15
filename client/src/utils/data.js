export const tasks = [
    {
      text: 'Kanye',
    }, {
      text: 'Lil Wayne',
    }, {
      text: 'SZA',
    }, {
      text: 'Post Malone',
    }, {
      text: 'Isaiah Rashad',
    }, {
      text: 'Don Toliver',
    }, {
      text: 'Mac Miller',
    }, {
      text: 'Migos',
    }, {
      text: 'Gucci Mane',
    }, {
      text: 'Asap Rocky',
    },
  ];
  
  export const appointments = [
    {
      text: 'Flume',
      startDate: new Date('2022-04-20T19:00:00.000Z'),
      endDate: new Date('2022-04-20T20:00:00.000Z'),
    }, {
      text: '21 Savage',
      startDate: new Date('2022-04-20T17:00:00.000Z'),
      endtime: new Date('2022-04-20T18:00:00.000Z'),
    }, {
      text: 'Cardi B',
      startDate: new Date('2022-04-20T19:00:00.000Z'),
      endtime: new Date('2022-04-20T20:35:00.000Z'),
    }, {
      text: 'Red Hot Chili Peppers',
      startDate: new Date('2022-04-21T19:00:00.000Z'),
      endtime: new Date('2022-04-21T21:00:00.000Z'),
    }, {
      text: 'The Clash',
      startDate: new Date('2022-04-22T18:00:00.000Z'),
      endtime: new Date('2022-04-22T19:00:00.000Z'),
    }, {
      text: 'Space Jesus',
      stage: 'Hip-Hop',
      startDate: new Date('2022-04-22T18:00:00.000Z'),
      endtime: new Date('2022-04-22T20:30:00.000Z'),
    },
  //   {
  //     name: 'Kanye',
  //     startDate: '11pm',
  //     endDate: '12am',
  //     date: 'April 20th',
  //     stage: 'Hip-Hop',
  // },
  // {
  //     name: 'Lil Wayne',
  //     startDate: '9pm',
  //     endDate: '10pm',
  //     date: 'April 20th',
  //     stage: 'Hip-Hop',
  // },
  ];
  

// const db = require('./connection');
// const { Band } = require('../models');

// db.once('open', async () => {
// const bands = await Band.insertMany ([

//     // Hip-Hop April 20th

//     {
//         name: 'Kanye',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 20th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Lil Wayne',
//         startime: '9pm',
//         endtime: '10pm',
//         date: 'April 20th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'SZA',
//         startime: '8pm',
//         endtime: '8:45pm',
//         date: 'April 20th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Post Malone',
//         startime: '7pm',
//         endtime: '7:45pm',
//         date: 'April 20th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Isaiah Rashad',
//         startime: '5:45pm',
//         endtime: '6:30pm',
//         date: 'April 20th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Don Toliver',
//         startime: '3pm',
//         endtime: '3:45pm',
//         date: 'April 20th',
//         stage: 'Hip-Hop',
//     },

//     // Hip-Hop April 19th

//     {
//         name: 'Mac Miller',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Migos',
//         startime: '9pm',
//         endtime: '10p,',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Cardi B',
//         startime: '8pm',
//         endtime: '8:45pm',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Gucci Mane',
//         startime: '7pm',
//         endtime: '7:45pm',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: '21 Savage',
//         startime: '5:45pm',
//         endtime: '6:30pm',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Rick Ross',
//         startime: '4:15pm',
//         endtime: '5pm',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Wale',
//         startime: '3pm',
//         endtime: '3:45',
//         date: 'April 19th',
//         stage: 'Hip-Hop',
//     },
    
//     // Hip-Hop April 18th

//     {
//         name: 'Asap Rocky',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 18th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Tyler The Creator',
//         startime: '9pm',
//         endtime: '10pm',
//         date: 'April 18th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Snoop Dogg',
//         startime: '8pm',
//         endtime: '8:45pm',
//         date: 'April 18th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Meg Thee Stallion',
//         startime: '5:45pm',
//         endtime: '6:30pm',
//         date: 'April 18th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'ScHoolboy Q',
//         startime: '4:15pm',
//         endtime: '5pm',
//         date: 'April 18th',
//         stage: 'Hip-Hop',
//     },
//     {
//         name: 'Rico Nasty',
//         startime: '3pm',
//         endtime: '3:45pm',
//         date: 'April 18th',
//         stage: 'Hip-Hop',
//     },



//     // EDM Section
    

//     // EDM April 20th

//     {
//         name: 'Flume',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 20th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Gallant',
//         startime: '9:30pm',
//         endtime: '10:30pm',
//         date: 'April 20th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Above and Beyond',
//         startime: '8:15pm',
//         endtime: '9pm',
//         date: 'April 20th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Armin Van Buren',
//         startime: '7:45pm',
//         endtime: '8:30pm',
//         date: 'April 20th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Kygo',
//         startime: '6:30pm',
//         endtime: '7:15',
//         date: 'April 20th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Dr.Fresch',
//         startime: '5:15pm',
//         endtime: '6pm',
//         date: 'April 20th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Griz',
//         startime: '4pm',
//         endtime: '4:45',
//         date: 'April 20th',
//         stage: 'EDM',
//     },

//     // EDM April 19th 

//     {
//         name: 'Zeds Dead',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 19th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Space Jesus',
//         startime: '9:30pm',
//         endtime: '10:30pm',
//         date: 'April 19th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Rezz',
//         startime: '8:15pm',
//         endtime: '9pm',
//         date: 'April 19th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Peekaboo',
//         startime: '7:45pm',
//         endtime: '8:30pm',
//         date: 'April 19th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Mija',
//         startime: '6:30pm',
//         endtime: '7:15pm',
//         date: 'April 19th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Lucii',
//         startime: '5:15pm',
//         endtime: '6pm',
//         date: 'April 19th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Louis the Child',
//         startime: '4pm',
//         endtime: '4:45pm',
//         date: 'April 19th',
//         stage: 'EDM',
//     },

//     // EDM April 18th

//     {
//         name: 'Tiesto',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 18th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Slander',
//         startime: '9:30pm',
//         endtime: '10:30pm',
//         date: 'April 18th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Ekali',
//         startime: '8:15pm',
//         endtime: '9pm',
//         date: 'April 18th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Just A Gen',
//         startime: '7:45pm',
//         endtime: '8:30pm',
//         date: 'April 18th',
//         stage: 'EDM',
//     },
//     {
//         name: 'San Holo',
//         startime: '6:30pm',
//         endtime: '7:15pm',
//         date: 'April 18th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Kai Wachi',
//         startime: '5:15pm',
//         endtime: '6pm',
//         date: 'April 18th',
//         stage: 'EDM',
//     },
//     {
//         name: 'Destructo',
//         startime: '4pm',
//         endtime: '4:45pm',
//         date: 'April 18th',
//         stage: 'EDM',
//     },



//     // Alternative/Rock Section
    

//     // Alternative/Rock April 20th

//     {
//         name: 'Blink-182',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'My Chemical Romance',
//         startime: '9:45pm',
//         endtime: '10:45pm',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'A Day to Remember',
//         startime: '8:30pm',
//         endtime: '9:15pm',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Neck Deep',
//         startime: '7:15pm',
//         endtime: '8pm',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Bad Religion',
//         startime: '6pm',
//         endtime: '6:45pm',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'New Found Glory',
//         startime: '4:45pm',
//         endtime: '5:30pm',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Hot Mulligan',
//         startime: '3:30pm',
//         endtime: '4:15pm',
//         date: 'April 20th',
//         stage: 'Alternative/Rock',
//     },

//     // Alternative/Rock April 19th

//     {
//         name: 'Manchester Orchestra',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Mumford and Sons',
//         startime: '9:45pm',
//         endtime: '10:45pm',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Peach Pit',
//         startime: '8:30pm',
//         endtime: '9:15pm',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'The Strokes',
//         startime: '7:15pm',
//         endtime: '8pm',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'The Front Bottoms',
//         startime: '6pm',
//         endtime: '6:45pm',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'The Wood Brothers',
//         startime: '4:45pm',
//         endtime: '5:30pm',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Punch Brothers',
//         startime: '3:30pm',
//         endtime: '4:15pm',
//         date: 'April 19th',
//         stage: 'Alternative/Rock',
//     },

//     // Alternative/Rock April 18th

//     {
//         name: 'Red Hot Chili Peppers',
//         startime: '11pm',
//         endtime: '12am',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'The Clash',
//         startime: '9:45pm',
//         endtime: '10:45pm',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Weezer',
//         startime: '8:30pm',
//         endtime: '9:15pm',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Beastie Boys',
//         startime: '7:15pm',
//         endtime: '8pm',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'The Sparks',
//         startime: '6pm',
//         endtime: '6:45pm',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'The Wonder Years',
//         startime: '4:45pm',
//         endtime: '5:30pm',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
//     {
//         name: 'Evanescence',
//         startime: '3:30pm',
//         endtime: '4:15pm',
//         date: 'April 18th',
//         stage: 'Alternative/Rock',
//     },
    
// ]);

// console.log('Bands seeded');

// process.exit();

// });