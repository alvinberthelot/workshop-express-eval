const express = require('express');
const app = express();
const fs = require('fs');

app.get('/bingo', function (req, res) {

  console.log('QUERY', req.query);

  fs.readFile('./src/numbers.txt', (err, data) => {
    if (err) {
      res.status(500).send('Impossible to read file !')
    }
    const result = data.toString().split('\n')
      .map(value => parseInt(value))
      .filter(Number.isInteger);

    if(!req.query.mynumbers) {
      res.send(`The bingo game is already started and known numbers are ${result.join(', ')}`);
    } else {
      const myNumbers = req.query.mynumbers.split(',')
        .map(value => parseInt(value))
        .filter(Number.isInteger)
        .sort((a, b) => a - b);
      let sortedResult = result.slice();
      sortedResult.sort((a, b) => a - b);
      if (myNumbers.toString() === sortedResult.toString()) {
        res.send('Bingo');
      } else {
        res.send(`The bingo game is already started, sorry your numbers doesn't match with known numbers ${result.join(', ')} ; so you can not say Bingo`);
      }
    }
    
  });

});

module.exports = app;