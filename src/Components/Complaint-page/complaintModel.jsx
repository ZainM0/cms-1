const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  crimeTitle: {
    type: String,
    required: true,
  },
  crimeDescription: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  mediaFiles: {
    type: [String],
  },
  selectedPoliceStation: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Complaint', complaintSchema);