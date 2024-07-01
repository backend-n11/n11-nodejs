// Object Freeze
// interface AnyObject {
//   name: any,
//   age: any,
//   gender: any,
// }

// interface AnyObject {
//   [K: string]: any
// }



const obj2 = {
  name: "bilol",
  age: 12,
  gender: "M"
}

Object.freeze(obj2)

// obj2.name = 123


// delete obj2.name
