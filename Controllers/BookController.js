const express = require("express");
const bodyParser = require("body-parser");
const { Book } = require("../Db/BookSchema");
const { Lending } = require("../Db/LendingSchema");
const bookValidator = require("../Validators/BookValidator");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/lent", async (req, res) => {
  try {
    const lentBooks = await Lending.find({});
    res.json(lentBooks);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    console.log(bookValidator.isValidISBN(req.body.ISBN));
    if (bookValidator.isValidISBN(req.body.ISBN)) {
      const book = new Book(req.body);
      const savedBook = await book.save();
      res.json(savedBook);
    } else {
      res.status(400).send("Please enter a valid ISBN");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/:_id", async (req, res) => {
  try {
    if (bookValidator.isValidISBN(req.body.ISBN)) {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.json(updatedBook);
    } else {
      res.status(400).send("Please enter a valid ISBN");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/:_id", async (req, res) => {
    try {
      const query = { _id: req.params._id };
      const deletedBook = await Book.deleteOne(query);
      res.json(deletedBook);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post("/lend/:_id", async (req, res) => {
    try {
      // Check if the book with the given ID exists
      const existingBook = await Book.findById(req.params._id);
      if (!existingBook) {
        return res.status(404).send("Book not found");
      }
      console.log(req.body);
      const lending = new Lending(req.body); 
      const savedLending = await lending.save();
      res.json(savedLending);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });

module.exports = app;
