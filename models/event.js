const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  amount: { type: String },
  bringer: { type: mongoose.Schema.ObjectId, ref: 'User' },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

itemSchema.set('toJSON', { virtuals: true });

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.set('toJSON', { virtuals: true });

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  decsription: { type: String },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  eventKey: {},
  guests: [],
  items: [ itemSchema ],
  comments: [ commentSchema ],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  photos: []
});

eventSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Event', eventSchema);
