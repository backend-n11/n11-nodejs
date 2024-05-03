import http from "node:http"





export const express = () => {
  let server
  let router = {}

  const listen = (PORT, callback) => {
    server = http.createServer((req, res) => {
      let body = []
      req.on("data", (data) => {
        body.push(data)
      })

      req.on("end", () => {
        body = Buffer.concat(body).toString()
      })


      const { url, method } = req
      const routerKey = `${method}:${url}`


    })

    server.listen(PORT, callback)
  }
  const get = (url, callback) => {
    const routerKey = `GET:${url}`
    const route = router[routerKey]
  }

  return {
    listen,
    get
  }
} 