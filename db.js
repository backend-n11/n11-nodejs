import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "12345",
  database: "postgres",
  port: "5432"
})








export const setUpDb = async () => {

  const quertyString = `
  CREATE TABLE IF NOT EXISTS otp (
    otp varchar (100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL UNIQUE    
  )
  `

  await pool.query(quertyString)

}
