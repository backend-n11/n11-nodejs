import pg from "pg"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config()


const { Pool } = pg

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`

class Database {
  constructor() {
    this.client = new Pool({
      connectionString,
    })
    // this.client.query.on('error', (err) => {
    //   console.error(err.stack)
    // })
  }

  async create(name, email, password) {
    try {
      const inserUser = `
        INSERT INTO users (name, password, email)
        VALUES ($1, $2, $3)
        returning *;
      `

      const hash = await this.hashFunc(password)
      const res = await this.client.query(inserUser, [name, hash, email])
      return res.rows
    } catch (error) {
      console.error(error.name)
      return false
    }
  }

  update() { }

  findAll() { }
  async findByEmail(email) {
    const findQuery = `
    SELECT * FROM users where email = $1
  `
    const res = await this.client.query(findQuery, [email])
    return res.rows[0]
  }

  findById(id) {
    return id
  }

  async hashFunc(password) {
    const saltRounds = 10
    const salt = await bcrypt.genSaltSync(saltRounds)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
  }
  async compareFunc(hash) {
    const isEqual = await bcrypt.compareSync(user.password, hash)
    return isEqual
  }
}
export default new Database()
