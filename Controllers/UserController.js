const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('../Db/UserSchema');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username }).exec();
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

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

app.put('/:_id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/:_id', async (req, res) => {
  try {
    const query = { _id: req.params._id };
    const deletedUser = await User.deleteOne(query);
    res.json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;

