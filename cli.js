import { EventEmitter } from "node:events"

const myEvent = new EventEmitter()


myEvent.on("data", (data) => {
  console.log(data)
})


myEvent.emit("data", "salom")


process.stdin.on("data", (data) => {
  console.log(data)
})