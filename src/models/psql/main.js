// import { pool } from '../../config/index.js'
import pg from 'pg'
const { Pool, Client } = pg
const connectionString = "postgres://postgres:1234@localhost:5432/n11"

export const pool = new Pool({
  connectionString,
})

const createUserTable = async () => {
  const queryString = `
  CREATE TABLE if not exists users (
    id serial primary key,
    name varchar(1000)
  )
  `
  console.log(pool)
  await pool.query(queryString)
}

createUserTable()