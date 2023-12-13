import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.2",
      port: 1200,
      user: "sampUser",
      password: "HotSandwich1",
      database: "database",
    },
  },
};

module.exports = config;
