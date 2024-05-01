import express from "express"

const app = express()

app.get("/todos", async (req, res) => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos")
    if (!result.ok) {
      res.send("Error")
    }
    const data = await result.json()
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

app.get("/todos/:id", async (req, res) => {
  // const { id } = req.params
  const id = req.params.id
  const result = await fetch("https://jsonplaceholder.typicode.com/todos")
  if (!result.ok) {
    return res.send("ERROR")
  }
  const users = await result.json()
  // const user = users.filter(user => user.id === +id)

  const user = users.filter(user => {
    if (user.id === +id) {
      return user
    }
  })

  return res.send(user)

})

app.listen(3030, () => {
  console.log(`Server is running on port ${3030}`)
})