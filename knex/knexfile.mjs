// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "postgres",
      user: "postgres",
      password: "1532",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "postgresql",
      user: "postgresql",
      password: "12345",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "postgresql",
      user: "postgresql",
      password: "12345",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
