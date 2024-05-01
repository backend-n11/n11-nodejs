console.log(" log 1")



const setIm = setImmediate(() => {
  console.log(" log 3")
})

clearImmediate(setIm)



process.nextTick(() => {
  console.log(" log 4")
})


setTimeout(() => {
  console.log(" log 2")
}, 0)

console.log(" log 5")


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(" Log 6")
  }, 0)
})


promise.then((data) => {
  console.log(data)
})