const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  amount: { type: String },
  bringer: { type: mongoose.Schema.ObjectId, ref: 'User' },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

itemSchema.set('toJSON', { virtuals: true });

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

commentSchema.set('toJSON', { virtuals: true });

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  location: { type: String },
  image: String,
  eventKey: Number,
  guests: [],
  items: [ itemSchema ],
  comments: [ commentSchema ],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  photos: []
});

eventSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Event', eventSchema);
