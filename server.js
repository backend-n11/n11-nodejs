// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const config = require("./knex/knexfile.mjs").default;
//
//
//
import knex from "knex";

const config = await import("./knex/knexfile.mjs");
const db = knex(config.default);

console.log(config);
// import { createTables, knex } from "./databaase/db.js";
//
// createTables();
//
// app.listen(4004,()=>{
// 	console.log("server running on port 4004")
// });
