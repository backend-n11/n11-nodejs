import { Router } from "express"
import { blogController } from "../controllers/blog.controller.js"
export const router = new Router()


router.post("/", blogController) // create
router.get("/", blogController) /// get all post
router.get("/:id ", blogController) /// get one blog by id | slug
router.put("/:id ", blogController) /// update one blog by id | slug
router.delete("/:id ", blogController) /// delete one blog by id | slug


// "Dasturlashni boshlash javascriptdan" - > "dasturlashni-boshlash-javascriptdan"