// new Map()
// map.set(key, value) 
// map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size

let obj = {
  name: "john"
}
//
let map2 = new Map()


map2.set(11, "11")
map2.set(22, "11")
map2.set(3, "11")
map2.set(41, "11")
map2.set(1, "11")
console.log(map2)
let map = new Map()

let size = map.size
// map.set("age", 12)
map.set("name1", 12)
map.set("name2", 12)
map.set("name", 12)
map.set([], [1, 2, 3])
map.set({}, [3])
// // // map.set({}, [3])
// // // map.set({}, [3])
// // // map.set(12, [3])
// // // map.set(true, [3])
// // // map.set(false, [3])
// map.set("func", () => {
// })

let itHas = map.has("name")
let name = map.get("name")
let del = map.delete()
// map.clear()
// console.log(map)

// j.forEach((el) => {
//   console.log(el)
// })

// let arr = [1, 2]
// let [a, b] = arr
// console.log(a, b)

// for (let [key, value] of map) {
//   console.log(key, value)
// }



let keys = map.keys()
let values = map.values()
let entries = map.entries()
let arr = Array.from(keys)
console.log(map)
// console.log(arr)
console.log("##############")



for (let i = 0; i < arr.length; i++) {
  const key = arr[i]
  let el = map.get(key)
  console.log(key, el)
}



// console.log(keys)

// for (const iterator in keys) {
//   console.log(iterator)

// }
// for (const val of values) {
//   console.log(val)
// }


// console.log(j)
