import http from "node:http"
import fs from "node:fs"


const users = [
  {
    name: "Ali",
    age: 22,
    gender: "M"
  },
  {
    name: "Bek",
    age: 21,
    gender: "M"
  },
  {
    name: "Maftuna",
    age: 20,
    gender: "F"
  },
  {
    name: "Bekzod",
    age: 10,
    gender: "M"
  },
  {
    name: "Munisa",
    age: 11,
    gender: "F"
  },
  {
    name: "Maftuna",
    age: 20,
    gender: "F"
  }
]

const server = http.createServer(async (request, response) => {
  const method = request.method
  const url = request.url

  if (method === "GET" && url === "/") {
    console.log(`
  >> METHOD :${request.method},
  >> URL :${request.url},  
  `)
    response.end("OK")
  } else if (method === "PUT" && url === "/users:id") {
    const body = request.body

  } else if (method === "DELETE" && url === "/users:id") {


  } else if (method === "GET" && url === "/users") {
    response.writeHead(200, {
      "Content-type": "application/json"
    })
    const json = JSON.stringify(users)
    response.end(json)
  } else if (method === "POST" && url === "/users") {
    let body = []

    request.on("data", (data) => {
      body.push(data)
    })

    // for await (const chunk of request) {
    //   body.push(chunk)
    // }

    request.on("end", () => {

      body = Buffer.concat(body).toString()
      console.log(body)

      if (request.headers['content-type'] === 'application/json') {
        request.body = JSON.parse(body)
      } else if (request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let params = new URLSearchParams(body)
        console.log(params)
        let entries = params.entries()
        console.log(entries)
        request.body = Object.fromEntries(entries)
      }
      console.log(request.body)

      response.writeHead(201, {
        "content-type": "application/json"
      })
      response.end(JSON.stringify(request.body))
    })


  } else if (method === "POST" && url === "/users") {
    console.log(`
  >> METHOD :${request.method},
  >> URL :${request.url},  
  >> Body :${request.body},  
  `)

    let buffersString = ""

    request.on("data", (data) => {
      buffersString += data.toString()
    })

    request.on("end", () => {
      console.log(buffersString)
      // console.log(JSON.stringify(Object.fromEntries(buffersString)))
      // console.log(JSON.parse(buffersString, 4))
    })

    response.writeHead(200, {
      "Content-type": "application/json"
    })
    const json = JSON.stringify(users)
    response.end(json)
  }


  else if (method === "GET" && url === "/html") {
    response.writeHead(200, {
      "Content-type": "text/html"
    })

    response.end(`
        <h1>
            H1
        </h1>
            
        <h2>
            H2
        </h2>
            
        
        <h3>
            H3
        </h3>
        `)
  } else if (method === "GET" && url === "/htmlFile") {
    fs.readFile("./public/index.html", "utf-8", (err, data) => {
      if (err) {
        response.writeHead(200, {
          "Content-type": "text/plain"
        })
        response.end("ERROR")
      }

      response.writeHead(200, {
        "Content-type": "text/html"
      })
      response.end(data)
    })
  } else if (method === "GET" && url === "/style.css") {
    fs.readFile("./public/style.css", "utf-8", (err, data) => {
      if (err) {
        response.writeHead(400, {
          "Content-type": "text/plain"
        })
        response.end("ERROR")
      }

      response.writeHead(200, {
        "Content-type": "text/css"
      })
      response.end(data)
    })
  } else if (method === "GET" && url === "/script.js") {
    fs.readFile("./public/script.js", "utf-8", (err, data) => {
      if (err) {
        response.writeHead(400, {
          "content-type": "text/plain"
        })
        response.end("SOMETHING ERROR")
      }
      response.writeHead(200, {
        "content-type": "text/javascript"
      })

      response.end(data)
    })
  }
})

server.listen(1234, () => {
  console.log(`Server is running on port: ${1234}`)
})