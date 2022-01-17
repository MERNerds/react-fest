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
  stage: {
    type: String,
    required: true
  },
  colorExpr: {
    type: String,
    Default: 'color'
  }
  
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;