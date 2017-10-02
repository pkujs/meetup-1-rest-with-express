const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, PekanbaruJS!');
});

app.get('/foo', (req, res) => {
  res.send('Foo route handler for GET method');
});

app.post('/foo', (req, res) => {
  res.send('Foo route handler for POST method');
});

function routeHandler(req, res) {
  res.send(`Hello ${req.params.name}`);
}

app.get('hello/:name', routeHandler);

app.listen(1337, () => {
  console.log('Magic happened at http://localhost:1337');
});
