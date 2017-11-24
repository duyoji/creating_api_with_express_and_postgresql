const app = require('./server.js');
const chalk = require('chalk');
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log( chalk.green.bold('Server listening on port: ') + chalk.cyan.bold(`${PORT}`) );
  console.log( chalk.magenta.bold('Access to http://127.0.0.1:8888/api/todos to check response.') );
  console.log( chalk.magenta.bold('Recommend using Postman. https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en') );
});