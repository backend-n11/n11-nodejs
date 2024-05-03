import express from "express"

export const helloMiddleware = {


  json() {
    return (req, res, next) => {
      express.json(),
        next()
    }
  }

}