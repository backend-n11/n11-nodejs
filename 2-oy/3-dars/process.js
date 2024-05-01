const os = require("node:os")


const order = []
process.stdin.on("data", (data) => {
  const str = data.toString().trim()
  console.log(typeof str)
  if (str == "salom") {
    process.stdout.write(`Va alaykum assalom`)
  } else if (str === "order") {

    process.stdout.write(`\n${str}:\n`)
  }

})