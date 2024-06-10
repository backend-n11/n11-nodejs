import { configuration } from "./configuration.js"


import pg from 'pg'
const { Pool, Client } = pg
const connectionString = configuration.db.pg

export const pool = new Pool({
  connectionString,
})