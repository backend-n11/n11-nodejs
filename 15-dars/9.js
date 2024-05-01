function delay(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`${ms} da ishga tushdi!`)
    }, ms)
  })
  return promise
}

// console.log(delay(100))

const log = async () => {
  const result = await delay(1000)

  console.log(result)
}
log()