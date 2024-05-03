import { Router } from "express"

export const router = new Router()


router.get("/", (req, res) => {
  res.send("admin")
})

router.post("/", (req, res) => {
  res.send("admin")
})

router.put("/", (req, res) => {
  res.send("admin")
})

router.delete("/", (req, res) => {
  res.send("admin")
})