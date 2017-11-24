const app = require('./server.js');
const chalk = require('chalk');
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(
  //sets server to listen to PORT and outputs to the CL
  chalk.green.bold('Server listening on port: ')
  + chalk.cyan.bold(`localhost:${PORT}`)
));