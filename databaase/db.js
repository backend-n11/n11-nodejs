import k from "knex";

const knex = k({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "store",
    database: "my_store",
  },
});

const createTables = async () => {
  const existsUser = await knex.schema.hasTable("users");
  if (!existsUser) {
    await knex.schema.createTable("users", (table) => {
      table.primary("id").increments();
      table.string("name").notNullable();
      table.string("email").unique().notNullable();
      table.string("phoneNumber").unique().notNullable();
      table.string("password").notNullable();
      table.enum("role", ["admin", "user"]).defaultTo("user");
    });
  }

  const existsBook = await knex.schema.hasTable("books");
  if (!existsBook) {
    await knex.schema.createTable("books", (table) => {
      table.primary("id").increments();
      table.string("name").notNullable();
      table.string("genre").notNullable();
      table.string("author").notNullable();
      table.decimal("price", 30, 15);
    });
  }

  const existspayedBook = await knex.schema.hasTable("payedBooks");
  if (!existspayedBook) {
    await knex.schema.createTable("payedBooks", (table) => {
      table.primary("id").increments();
      table
        .integer("userId")
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table
        .integer("bookId")
        .notNullable()
        .references("id")
        .inTable("books")
        .onDelete("CASCADE");
    });
  }
};

export { createTables, knex };
