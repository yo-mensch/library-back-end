const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then()
  .catch(err => console.log(err));

  const lendingSchema = new mongoose.Schema({
    name: String,
    author: String,
    ISBN: String,
    status: String,
    clientName: String,
    clientSurname: String,
    clientPhoneNumber: String,
    deadline: String
  });

const Lending = mongoose.model('Lending', lendingSchema);

module.exports = {
    Lending
};
