/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function (knex) {
  const existsTable = knex.schema.hasTable("users");
  if (!existsTable) {
    return knex.schema.createTable("users", (table) => {
      table.primary("id").increments();
      table.string("name").notNullable();
      table.string("email").unique().notNullable();
      table.string("phoneNumber").unique().notNullable();
      table.string("password").notNullable();
      table.enum("role", ["admin", "user"]).defaultTo("user");
    });
  }
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  knex.schema.dropTableIfExists("users");
};
