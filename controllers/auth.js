import db from "../database/auth.js"

export const authRegisterController = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).send("Invalid value")
  }

  const newUser = await db.create(name, email, password)
  if (!newUser) {
    res.status(400).send("Ivalid values")
  }
  res.send(newUser)
}


export const authLoginController = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).send("Invalid alue")
  }
  const newUser = await db.findByEmail(email)
  res.send(newUser)
}