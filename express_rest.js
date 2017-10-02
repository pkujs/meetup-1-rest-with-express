const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./User');

const app = express();

mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost/pkujs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Express REST API');
});

app.get('/users', (req, res) => {
  User.find(function(err, users) {
    if (err) {
      console.log(err);

    } else {
      res.send(users);
    }
  });
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.remove({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.listen(1337, () => {
  console.log('Magic happened at http://localhost:1337');
});
