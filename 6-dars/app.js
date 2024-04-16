let students = [
  {
    ism: "xamidullo",
    age: 13,
    familiya: "xudoyberdiyev",
    sinf: 5,
    baho: 35
  }, {
    ism: "x",
    age: 23,
    familiya: "y",
    sinf: 9,
    baho: 12
  },
  {
    age: 111
  }
]


let len = students.length

for (let i = 0; i < len; i++) {
  let student = students[i]
  if (student.ism)
    console.log(student.ism)
}










// let student = {
//   ism: "xamidullo",
//   age: 13,
//   familiya: "xudoyberdiyev",
//   sinf: 5,
//   baho: 35
// }

// if (student.name == "xamidullo" || (student.sinf == 5 && student.age <= 12)) {
//   console.log("n11")
// }
// // if (student.baho >= 50 || (student.sinf >= 5 && student.age >= 12)) {
// //   console.log("n11")
// // }
