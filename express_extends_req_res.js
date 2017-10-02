const express = require('express');

const app = express();

app.get('/pkujs', (req, res) => {
  res.redirect('https://pekanbaru.js.org');
});

app.get('/download', (req, res) => {
  res.sendFile('/Users/rully/Music/cool_song.mp3');
});

app.listen(1337, () => {
  console.log('Magic happened at http://localhost:1337');
});
