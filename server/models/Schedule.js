const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    text: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;