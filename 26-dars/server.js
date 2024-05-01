import express from "express"
import fs from "node:fs"
import path from "node:path"

const __dirname = import.meta.dirname
const __filename = import.meta.filename

const htmlPath = path.join(__dirname, "public", "index.html")

const app = express()

// TODO : 
// 1 method:get  users [{}]
// 2 method:get  products [{}]
// 3 middelware  log url , method

const products = [{
  "name": "Macbook",
}, {
  "name": "Air",
}, {
  "name": "Car",
}]
app.use((req, res, next) => {
  console.log(`
  >>> METHOD ${req.method}
  >>> URL ${req.url}
  `)
  next()
})
app.use(express.static('public'))
app.use((req, res, next) => {
  if (req.url === "/block") {
    console.log("block")
    res.send(`Siz block usersiz kira olmaysiz`)
  }
  next()
})
app.get("/html", (request, response) => {
  response.sendFile(htmlPath)
})

/** TODO:
* 1.  https://jsonplaceholder.typicode.com/todos
* 2. http://localhost:4000/todos da hamma todolarni qaytarsin
* 3.  http://localhost:4000/todos/1 da faqat id si 1 ga teng bo'lgan todoni qaytarsin
*/

app.get("/todos", ())



app.get("/users/:id", async function (request, response) {
  const { id } = request.params
  const fetchdata = await fetch("https://jsonplaceholder.typicode.com/users")

  const json = await fetchdata.json()

  const user = json.filter(user => user.id == id)
  if (user.length == 0) {
    return response.send(`TOPILMADI`)
  }
  response.send(user)
})


app.get("/users", function (request, response) {
  response.send([{
    "name": "Percey",
    "age": 11,
    "gender": "M"
  }, {
    "name": "John",
    "age": 12,
    "gender": "M"
  }, {
    "name": "Lily",
    "age": 20,
    "gender": "F"
  }])
})

app.get("/posts", async function (request, response) {

  const fetchdata = await fetch("https://jsonplaceholder.typicode.com/posts")

  const json = await fetchdata.json()

  response.send(json)

})

app.get("/products", function (request, response) {
  response.send(products)
})


app.get("/", function (request, response) {
  console.log(request.method)
  console.log(request.url)
  // response.send("Hello express!")
  // response.send([{
  //   "name": "Percey",
  //   "age": 11,
  //   "gender": "M"
  // }, {
  //   "name": "John",
  //   "age": 12,
  //   "gender": "M"
  // }, {
  //   "name": "Lily",
  //   "age": 20,
  //   "gender": "F"
  // }])

  // response.send(
  //   `
  //   < i >
  //   salom
  //   </i >

  //   <h1>
  //   H1
  //   </h1>

  //   <h2>
  //   H2
  //   </h2>

  //   <h3>
  //   H3
  //   </h3>

  //   `

  // response.send(html)

})


// app.put()
// app.delete()


app.listen(3000, () => {
  console.log(`Server running on port ${3000}`)
})