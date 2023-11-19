const express = require("express");
const bodyParser = require("body-parser");
const {Book} = require("../Db/BookSchema");
const bookValidator = require("../Validators/BookValidator");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/create", async (req, res) => {
    try {
        console.log(req);
        console.log(req.body);
        console.log(req.body.ISBN);
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

module.exports = app;