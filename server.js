const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const ControllerName = require('path/to/Controller');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(cookieParser());
// app.use('/route', ControllerName);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));