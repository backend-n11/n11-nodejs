import express from "express"

const app = express()

app.use((req, res, next) => {
  console.log(
    `
    >>> METHOD ${req.method}
    >>> URL : ${req.url}
    `
  )
  next()
})

app.get("/users", (req, res) => {
  res.send([
    {
      "name": "islom"
    },
    {
      "name": "ali"
    }, {
      "name": "bek"
    }
  ])
})



app.get("/users", (req, res) => {
  res.send([
    {
      "name": "islom"
    },
    {
      "name": "ali"
    }, {
      "name": "bek"
    }
  ])
})

app.get("/products", (req, res) => {
  res.send([
    [
      {
        "name": "Macbook"
      },
      {
        "name": "Acer"
      }, {
        "name": "Asus"
      }
    ]
  ])
})

app.listen(4000, () => {
  console.log("RUNNING")
})