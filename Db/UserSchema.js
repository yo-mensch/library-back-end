const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Library')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String // In a real-world scenario, you should encrypt passwords
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};