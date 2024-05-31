
import db from "../database/auth.js"


export const setUpController = async (req, res) => {
  const newUser = await db.createTables()
  res.send(newUser)
}
