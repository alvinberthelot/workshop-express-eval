let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

app.listen(port, function () {
  // start server here
  console.log(chalk.green(`Example app listening on port ${port}!`));
})
