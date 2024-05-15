import bcrypt, { compareSync } from "bcrypt"

const saltRounds = 10
const myPlaintextPassword = '5'

const salt = bcrypt.genSaltSync(saltRounds)

const hash = bcrypt.hashSync(myPlaintextPassword2, salt)

console.log(hash)

const exist = bcrypt.compareSync(myPlaintextPassword, hash) // true

console.log(exist)