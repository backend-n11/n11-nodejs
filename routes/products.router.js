import { Router } from "express"
import { createOne, deleteOne, getAll, getOne, updateOne } from "../controllers/product-controller.js"

export const router = new Router()


router.get("/", getAll)

router.get("/:id", getOne)

router.post("/", createOne)

router.put("/:id", updateOne)

router.delete("/:id", deleteOne)
