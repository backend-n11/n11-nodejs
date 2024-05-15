import { Router } from "express";
import { comments } from "../controllers/commits.controller.js";

let router = Router()

router.post('/', comments)

export default router