const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  userRoll: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tree', TreeSchema);
