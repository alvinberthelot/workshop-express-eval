const express = require('express');
const app = express();

app.get('/bingo', function (req, res) {
  res.send('Bingo');
});

module.exports = app;