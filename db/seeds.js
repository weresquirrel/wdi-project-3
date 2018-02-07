const mongoose = require('mongoose');
const { db, env } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(db[env]);

const Event = require('../models/event');
const User = require('../models/user');

Event.collection.drop();
User.collection.drop();

// firstName: { type: String, required: true },
// lastName: { type: String, required: true },
// username: { type: String, required: true },
// email: { type: String, required: true, unique: true },
// password: { type: String, required: true },
// bio: { type: String },
// profilePic: {type: String }

User
  .create([{
    firstName: 'Suzie',
    lastName: 'Smith',
    username: 'Party_Guru',
    email: 'suzie@smith.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'Wife, mama, blogger, organizer. Always up to do something.',
    profilePic: 'https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-0.3.5&s=e1bddd72952e837dc31b0689396ee021&auto=format&fit=crop&w=1050&q=80'
  },{
    firstName: 'Angie',
    lastName: 'Miller',
    username: 'smilingangel',
    email: 'angie@miller.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'Full-time artist, part-time office-dweller. Always ready for doing nothing',
    profilePic: 'https://images.unsplash.com/photo-1501625277806-e25bd4596da3?ixlib=rb-0.3.5&s=66a232d84f7b97fe0cf6c7138e59eee0&auto=format&fit=crop&w=800&q=80'
  },{
    firstName: 'Matt',
    lastName: 'Harlow',
    username: 'MattHarlow',
    email: 'matt@harlow.com',
    password: 'password',
    passwordConfirmation: 'password',
    bio: 'I love pizza',
    profilePic: 'https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-0.3.5&s=24a213cc90398e685e0dcfe27fb9fa26&auto=format&fit=crop&w=668&q=80'
  }])
  .then((users) => {
    console.log(users);
    console.log(`${users.length} users created`);
    return Event
      .create([{
        eventName: 'Pizza Night',
        description: 'Let\'s ignore this Valentine-guy and eat pizza!',
        date: 'Feb 14, 2018',
        location: {
          firstLine: '119 Drayton Rd',
          secondLine: '',
          city: 'London',
          postal_code: 'NW10 4DH',
          lat: 51.54035,
          lng: -0.24488
        },
        image: 'https://images.unsplash.com/photo-1509403491765-9fb9d773ca6d?ixlib=rb-0.3.5&s=7384d4b273bc43324d89f08f92d818ae&auto=format&fit=crop&w=1036&q=80',
        eventKey: 809362,
        guests: [users[1]._id],
        items: [ {
          itemName: 'pizza',
          amount: 'many',
          bringer: null,
          createdBy: users[2]._id
        } ],
        // comments: [ commentSchema ],
        createdBy: users[2]._id,
        photos: []
      } ]);
  })
  .then((events) => {
    console.log(events);
    console.log(`${events.length} events created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
