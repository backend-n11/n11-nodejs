import pg from "pg"

const { Pool } = pg

const connectionString = "postgres://postgres:12345@localhost:5432/postgres"


export const db = new Pool({ connectionString })
