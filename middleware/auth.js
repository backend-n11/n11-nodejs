import { db } from "../databse/mid.js"

export const authMiddleware = async (req, res, next) => {
  const { method, url, body } = req
  if (method === "POST" && url === "/register") {
    next()
  }

  const selector = `
  SELECT * FROM users
  WHERE email = $1::text;
  `
  const result = await db.query(selector, [body.email])

  console.log(result.rows[0])

  return res.status(200).json(result.rows[0])
}