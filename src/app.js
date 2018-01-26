const express = require('express');
const app = express();
const fs = require('fs');

app.get('/bingo', function (req, res) {

  fs.readFile('./src/numbers.txt', (err, data) => {
    if (err) {
      res.status(500).send('Impossible to read file !')
    }
    const result = data.toString().split('\n')
      .map(value => parseInt(value))
      .filter(Number.isInteger)
      .join(', ');
    res.send(result);
  });

});

module.exports = app;