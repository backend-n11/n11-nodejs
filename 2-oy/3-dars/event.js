import EventEmitter from "node:events"

const event = new EventEmitter()


event.on("order", (...data) => {
  console.log(data[0])
})

event.on("order", (...data) => {
  console.log(data[1])
})


event.on("order", (...data) => {
  console.log(data[2])
})
event.on("buyurtma", (data) => {
  console.log(data)
})



event.emit("order", "Polov", "OSh", "POLOV HOn")
// event.emit("buyurtma", "Tinchlik")
