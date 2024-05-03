import fs from "node:fs"

const products = [{
  name: "Olma",
  price: 1000
}]


export const getOne = (req, res) => {
  const { id } = req.params
  const product = products.find(product => product.id === parseInt(id))
  res.send(product)
}


export const createOne = (req, res) => {
  try {
    const { name, price } = req.body
    if (!name || !price) {
      return res.send("Ma'lumot to'liq emas! ")
    }

    const id = Date.now()
    const product = {
      name,
      price,
      id
    }

    products.push(product)

    fs.writeFile("../database/products.json", JSON.stringify(products), (err, data) => {
      if (err) {
        console.error("error", err)
      }

      res.send(data)
    })
  } catch (error) {
    console.error("error", error)

  }
}

export const getAll = (req, res) => {
  res.send(products)
}



export const updateOne = (req, res) => {
  try {
    console.log("salom")
    const { id } = req.params
    const { name, price } = req.body
    console.log({
      id, name, price
    })

    if (!name || !price) {
      return res.send("Ma'lumot to'liq emas! ")
    }

    products.find(product => {
      if (product.id == id) {
        console.log(product)
        product.name = name
        product.price = price

      }
    })

    res.send(products)

  } catch (error) {
    console.error(error)
  }
}

export const deleteOne = (req, res) => {
  const { id } = req.params

  products.forEach((product, index) => {
    if (product.id == id) {
      products.splice(index, 1)
    }
  })

  res.send(products)
}