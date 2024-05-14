import pg from 'pg'
import bcrypt from "bcrypt"



const TEXT = 'DROP TABLE IF EXISTS users;'

const createTable = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    password VARCHAR(255
    email VARCHAR(255) UNIQUE NOT NULL
)`



export class Database {
  async DbConnnect() {
    const { Client } = pg
    this.client = new Client({
      user: 'postgres',
      password: '12345',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
    })

    await this.client.connect()
  }
  async DbDisConnnect() {

    await this.client.end()
  }
  async create(name, email, password) {

    await this.DbConnnect()

    const inserUser = `
    INSERT INTO users (name, password, email)
    VALUES ($1, $2, $3)
    returning *
  `
    console.log({ name, password, email })

    const hash = await this.hashFunc(password)
    const res = await this.client.query(inserUser, [name, hash, email])
    this.DbDisConnnect()
    return res.rows[0]

  }

  update() {

  }
  findAll() {

  }
  async findByEmail(email) {
    await this.DbConnnect()

    const findQuery = `
    SELECT * FROM users where email = $1
  `

    const res = await this.client.query(findQuery, [email])
    this.DbDisConnnect()
    return res.rows[0]
  }

  findById(id) {

  }
  async hashFunc(password) {
    const saltRounds = 10
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
  }
  async compareFunc(hash) {
    const isEqual = await bcrypt.compareSync(user.password, usersHashPassword)
    return isEqual
  }
}
