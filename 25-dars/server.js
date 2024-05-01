import http from "node:http"

const PORT = "3000"


const server = http.createServer((request, response) => {
  console.log(request.method)
  console.log(request.url)
  response.writeHead(200, {
    "Content-type": "application/json"
  })

  if (request.method == "GET" && request.url == "/users") {
    response.write(JSON.stringify([{
      "name": "John",
      "age": 12,
      "gender": "M"
    }, {
      "name": "John",
      "age": 12,
      "gender": "M"
    }, {
      "name": "John",
      "age": 12,
      "gender": "M"
    }, {
      "name": "John",
      "age": 12,
      "gender": "M"
    }])
    )

    return response.end()
  }

})


server.listen(PORT, () => {
  console.log(`Server is running on PORT ${server.address().port}`)
})