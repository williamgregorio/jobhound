module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './data/db.sqlite3', // Change the path to where you want your SQLite database to be stored
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
  };
  