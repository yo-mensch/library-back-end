const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const BookController = require("./Controllers/BookController");
const UserController = require("./Controllers/UserController");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/book', BookController);
app.use('/user', UserController);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));