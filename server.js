import { app } from "./src/app.js";
import { createTables, knex } from "./databaase/db.js";

createTables();

app.listen(4004,()=>{
	console.log("server running on port 4004")
});
