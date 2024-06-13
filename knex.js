import knex from "knex";

const db = knex({
	client: "postgres",
	connection: {
		host: "127.0.0.1",
		port: 5432,
		user: "postgres",
		password: "12345",
		database: "postgres",
	},
});

const Users = () => db("users");

const result = await Users().insert({
	email: "abcd@mail.com",
	password: "qwer1234qwer",
}).returning("*")

console.log(result);
