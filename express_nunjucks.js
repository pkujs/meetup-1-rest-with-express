const express = require('express');
const expressNunjucks = require('express-nunjucks');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));

const njk = expressNunjucks(app, {
  watch: true,
  noCache: true,
});

app.get('/', (req, res) => {
  res.render('index', { data: 'Hello, PekanbaruJS' });
});

app.listen(1337, () => {
  console.log('Magic happened at http://localhost:1337');
});
