const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  genre: {
    type: String,
    required: true
  }
  
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;