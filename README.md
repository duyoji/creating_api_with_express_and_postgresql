## Meetup

This repository is for [this meetup event](https://www.meetup.com/ja-JP/CodeChrysalis/events/245248864/).


## Requirements

- Node.js (Confirmed working on version 8.9.1.)
- PostgreSQL (Confirmed working on version 9.6.3.)
- Yarn (Preferable.)

## Using ES6/7 syntax

This repository has ES6/7 syntax in this code. If you are not familar with following, I recommend read articles about those.

- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- `async/await`
  - [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  - [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - To understand `async/await`, you need to know `Promises` because `async/await` uses `Promise` under the hood.

## What is Each Branch of this repository for?

This repository has 6 branches to learn how to create API server with JavaScript.

- [Part1: Setup environment of DB.](https://github.com/duyoji/creating_api_with_express_and_postgresql/tree/part1-setup_db_env)
- [Part2: Setup environment of Express.](https://github.com/duyoji/creating_api_with_express_and_postgresql/tree/part2-setup_express_env)
- [Part3: Get todos.](https://github.com/duyoji/creating_api_with_express_and_postgresql/tree/part3-get_todos)
- [Part4: Create a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/tree/part4-create_todo)
- [Part5: Update a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/tree/part5-update_todo)
- [Part6: Delete a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/tree/part6-delete_todo)


Also you can see what differences is between current part and previous part in [PR list](https://github.com/duyoji/creating_api_with_express_and_postgresql/pulls).

I recommend you don't change to above branches from master or other branches that you create. To understand this work flow, I also recomend that you don't copy code from above branches and paste into your code.

But, you are allowed to refer to code of above branches to finish each process.

## How to install libraries

`yarn` or `npm` is used for install libraries.


### Install dependencies that are written in package.json

```shell
$ npm install
  //or
$ yarn install
```

### Install new libraries

**Install into `dependencies` group in package.json**

```shell
$ yarn add MODULE_NAME
or
$ npm install MODULE_NAME
```

**Install into `devDependencies` group in package.json**

```shell
$ yarn add -D MODULE_NAME
or
$ npm install -D MODULE_NAME
```

## Objectives of each part

See each comment of PR and Finish all parts. (Please read `To achieve this process` in PR to understand what you need to do.)

- [Part1: Setup environment of DB.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/7)
- [Part2: Setup environment of Express.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/8)
- [Part3: Get todos.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/9)
- [Part4: Create a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/10)
- [Part5: Update a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/11)
- [Part6: Delete a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/12)

## Recourses

- Sequelize
  - [Home page](http://docs.sequelizejs.com/)
  - [Migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)
  - [Data types of Sequelize](http://docs.sequelizejs.com/variable/index.html)
- Express
  - [Home page](https://expressjs.com/)
  - Middleware
    - [Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)
    - [Using middleware](https://expressjs.com/en/guide/using-middleware.html)
- Others
  - [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
