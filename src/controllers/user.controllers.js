import { Users } from "../models/index.js"
export const getMeController = (req, res) => {
  const { user } = req
  res.json(req.user)
}
