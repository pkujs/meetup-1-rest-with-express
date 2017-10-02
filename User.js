const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
},
{
  collection: 'users'
});

module.exports = mongoose.model('users', userSchema);
