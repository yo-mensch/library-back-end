const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected 2'))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String // In a real-world scenario, you should encrypt passwords
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User
};