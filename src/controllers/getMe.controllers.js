import jwt from "jsonwebtoken";
import Joi from "joi"
import {
  findUser,
  getMe
} from "../services/user.js"


export const getMeController = async (req, res) => {

  const user = req.user

  res.send(user)
}
