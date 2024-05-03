import { Router } from "express"
import {
  createOne
getAll
getOne
updateOne
deleteOne
} from "../controllers/user.controller"

export const router = new Router()


//GET "localhost:/user/"
router.get("/", getAll)

// POST "localhost:/user/"
router.post("/", createOne)

// PUT "localhost:/user/:id"
router.put("/:id", updateOne)

// DELETE "localhost:/user/:id"
router.delete("/:id", deleteOne)