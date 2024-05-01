import fs from "node:fs"

// fs.readFile("/home/pro/najot-talim/N11/2-oy/3-dars/os.js", "utf-8", callback)
fs.readFile("./os.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err)
    return err
  }

  let newData = data.toUpperCase().split('\n').join("$$$$$$$$$$")

  // fs.writeFileSync("./os.txt", newData)
  fs.writeFile("./os.txt", newData, (err) => {
    if (err)
      console.log(err)
  })
})

// console.time("fs")

// // console.log(fs.readFileSync("./os.js", "utf-8"))

// console.timeEnd("fs")

console.log("SALOM")