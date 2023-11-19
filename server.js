const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const BookController = require("./Controllers/BookController");
// const ControllerName = require('path/to/Controller');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use('/book', BookController);
// app.use('/route', ControllerName);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));