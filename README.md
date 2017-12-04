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

## What you need to do

See each comment of PR and Finish all parts. (Please read `To achieve this process` in PR to understand what you need to do.)

- [Part1: Setup environment of DB.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/7)
- [Part2: Setup environment of Express.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/8)
- [Part3: Get todos.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/9)
- [Part4: Create a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/10)
- [Part5: Update a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/11)
- [Part6: Delete a todo.](https://github.com/duyoji/creating_api_with_express_and_postgresql/pull/12)


To understand what you need to do in each part, I recommend that you don't copy and paste into your code.
But, you are allowed to refer to differences of code to finish each part.


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