module.exports = {

    development: {
      // our DBMS driver
      client: 'sqlite3',
      // the location of our db
      connection: {
        filename: './database/auth.db3',
      },
      // necessary when using sqlite3
      useNullAsDefault: true
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  };