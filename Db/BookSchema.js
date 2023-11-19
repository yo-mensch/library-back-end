const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  ISBN: String,
  status: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {
    Book
};