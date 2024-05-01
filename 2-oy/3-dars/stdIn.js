import fs from "node:fs"

const callback = (data) => {
  console.log(data)
}

function callback2(data) {
  console.log(data)
}

process.stdin.on("data", (commandData) => {
  let command = commandData.toString().trim().split(" ")

  console.log(command)
  if (command == "read") {
    fs.readFile("./os.txt", "utf-8", (err, data) => {
      console.log(data)
    })
  } else if (command == "write") {

  } else if (command == ".exit") {
    process.exit()
  }
})