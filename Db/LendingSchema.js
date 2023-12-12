const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library', { useNewUrlParser: true, useUnifiedTopology: true })
  .then()
  .catch(err => console.log(err));

  const lendingSchema = new mongoose.Schema({
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Reference to the Book model
      required: true
    },
    lendingStatus: String,
    clientName: String,
    clientSurname: String,
    clientPhoneNumber: String,
    deadline: { type: Date, required: true },
    dateWhenReturned: String
  });

const Lending = mongoose.model('Lending', lendingSchema);

module.exports = {
    Lending
};
