const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('../Db/UserSchema');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password }).exec();

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Here, you might generate a JWT token or use sessions to manage authentication

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;

