const models = require('../models');

// console.log(models.sequelize);

// models.sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// console.log(models, '111111111111111111');
// models.sequelize.sync().then(function() {
//   console.log(models, '2222222222222222');
// });

const findAll = async () => {
  const todos = await models.Todo.findAll();
  // console.log(todos);
  todos.forEach((todo) => {
    console.log(todo.id);
    console.log(todo.title);
    console.log(todo.body);
    console.log('-----------------');
  });

  return todos;
};

findAll();

