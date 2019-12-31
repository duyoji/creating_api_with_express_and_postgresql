const app = require("./server");
const chalk = require("chalk");
const PORT = 8080;

app.listen(PORT, console.log(chalk.greenBright.bold(`Run server${PORT}`)));
