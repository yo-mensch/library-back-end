const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected 2'))
  .catch(err => console.log(err));

  const lentBookSchema = new mongoose.Schema({
    name: String,
    author: String,
    ISBN: String,
    status: String,
    clientName: String,
    clientSurname: String,
    clientPhoneNumber: String
  });

const LentBook = mongoose.model('LentBook', lentBookSchema);

module.exports = {
    LentBook
};
