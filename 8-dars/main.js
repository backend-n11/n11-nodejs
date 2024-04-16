minMax([42, 21, 11, 1, 2, 3])


let array = [1, 2, 3, 4]

array.push("1")
array.push(true)
array.push(null)
array.push(undefined)
array.push([12, 3, 4,])
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.unshift(11)
array.unshift(21)
array.unshift(42)
console.log(array)
console.log("##############################")

array.forEach(function (item, index, array) {
  console.log(index, item, array)

})




/*
function myFunc(p) {
  console.log("My Func", p)
}
myFunc({ a: [12345, 1234, 123] })

console.log(sum(1, 2))


let sum = function (num1, num2) {
  const sum = num1 + num2
  console.log(sum)
  return sum
}

let calc = () => {
  // console.log(`num1 + num2 = ${num1 + num2}`)
  console.log(arguments)
  // let sum = 0
  // for (let i = 0; i < args.length; i++) {
  //   sum = sum + args[i]
  // }
  // return sum
}
const res = calc(2, 3, 4, 12, 6, 9)


let age = 5

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult')

welcome() // Babyc



// const arrValue = "salom"
// const obj = {
//   name: "sasa",
//   age: 123
// }
// console.log(arrValue)   // ["My", "name", "is", "Jack"]
// console.log(...obj) // My name is Jack


let result
function chaqir(name, callback) {
  console.log(`Hi  ${name}`)
  result = callback(name)
  console.log(result)
}

console.log(`RESULT 1 ${result}`)

let sum = a => a
// callback function
const callMe = (n) => {
  sum(1)
  console.log('I am callback function')
  return n
}

// passing function as an argument
chaqir('Peter', callMe)



console.log(`RESULT 2 ${result}`)


var a = 12
a = 5
console.log(a)
*/

// function recurse(num) {
//   if (num > 10) {
//     return 1
//   }
//   console.log(num)
//   return num + recurse(num + 1)
// }
// console.log(
//   recurse(1)

// )
// console.log("#############")


// function fac(n) {
//   if (n < 1) {
//     return 1
//   }

//   return n * fac(n - 1)
// }

// fac(10)