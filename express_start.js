const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello, Pekanbaru!');
});

app.listen(1337, () => {
  console.log('Magic happened at http://localhost:1337');
});
