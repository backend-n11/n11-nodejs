

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ISHLADI")
  }, 1000)
})

const thenCallback = data => {
  console.log(data)
}

promise
  .then(thenCallback)
  .catch(error => {
    console.log(error)
  })