import { add } from "./math/add.js"

console.log(process.argv)
const logic = process.argv[2]

const a = process.argv[3]
const b = process.argv[4]

if (logic === "add") {
  console.log(add(Number(a), +b))
}