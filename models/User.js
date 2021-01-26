let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  register_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', userSchema);