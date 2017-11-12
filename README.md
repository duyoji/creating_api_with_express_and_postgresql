## Environment

### Installing Dependencies and Startup

In this example, I just use yarn but of course you can use `npm` command to install modules and run scripts.

#### To install dependencies:

```bash
yarn install
```

#### To setup environment of DB:

To modify username in config/config.json to match your environment of PostgreSQL

```json
{
  "development": {
    "username": "CHANGE_TO_YOUR_ROLE",
    "password": null,
    "database": "creating_api_with_express_and_postgresql_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "CHANGE_TO_YOUR_ROLE",
    "password": null,
    "database": "creating_api_with_express_and_postgresql_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "CHANGE_TO_YOUR_ROLE",
    "password": null,
    "database": "creating_api_with_express_and_postgresql_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

#### To create database in your PostgreSQL server.

```bash
yarn db:create
```

After running above command, you can see `creating_api_with_express_and_postgresql_development` database in your DB.

To check that, run `\l` in `psql` interface.

```bash
DB_NAME=# \l
```


#### To create Todo table in your DB.

```bash
yarn db:migrate
```

Table(s) is created by using information of `migrations/*.js`.


#### To insert dummy data into table in your Table.

```bash
yarn db:seed:all
```

Inserted data comes from `seeders/*.js`.




## References

- [Sequelize](http://docs.sequelizejs.com/)