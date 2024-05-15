import bcrypt, { compareSync } from "bcrypt"

const saltRounds = 10
const myPlaintextPassword = '5'
const myPlaintextPassword2 = '15'

const salt = bcrypt.genSaltSync(saltRounds)

const hash2 = bcrypt.hashSync(myPlaintextPassword2, salt)

console.log(hash)

const exist = bcrypt.compareSync(myPlaintextPassword2, hash) // true

console.log(exist)