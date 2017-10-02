const express = require('express');

const app = express();

app.use((request, response, next) => {
  console.log('Middleware#1');
  next();
});

app.use((request, response, next) => {
  console.log('Middleware#2');
  next();
});

// routing middleware
app.get('/', (request, response) => {
  response.send('Hello, PekanbaruJS!');
});

app.listen(1337, () => {
  console.log('Magic happened at http://localhost:1337');
});
