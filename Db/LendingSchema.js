const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then()
  .catch(err => console.log(err));

  const lendingSchema = new mongoose.Schema({
    book_id: String,
    lendingStatus: String,
    clientName: String,
    clientSurname: String,
    clientPhoneNumber: String,
    deadline: String,
    dateWhenReturned: String
  });

const Lending = mongoose.model('Lending', lendingSchema);

module.exports = {
    Lending
};
