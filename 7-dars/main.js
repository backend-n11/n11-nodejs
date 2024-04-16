// let str = "2"
// let res = 1
// // console.log("Qiymat: " + (res + str) + "saksaks")
// // let convertToNumber = parseInt(str)
// // let convertToNumber = Number(str)
// /**
//  * 1. ''
//  * 2. false
//  * 3. null
//  * 4. undefined
//  * 5. true
//  */

// // let convertToNumber = Number(true)
// // console.log({ convertToNumber })

// // console.log(`Qiymat: ${res + convertToNumber}`)
// // console.log(typeof (res + convertToNumber))






// let score = 51

// score >= 50 ? score == 50 ? console.log("50") : console.log("KIchik") : console.log("FALSE")

// if (score >= 50) {
//   console.log("You passed the examination.")
// }
// else {
//   console.log("You failed the examination.")
// }

// const score = 71

// switch (score) {

//   case 50:
//     console.log("50")
//     break

//   case 70:
//     console.log("70")
//     break

//   default:
//     console.log("DEFAULT")
// }
// let i = 2

// while (i > 0) {
//   console.log(i)
// }

let array = [1, 2, 3, 4, 5, 6, 7, 3, 5, 392, 2, 1212, 4, 23564, 6]

let obj = {
  xamidullo: {
    ism: "xasa",
    familiya: "egamberdiyev",
    age: '1234',
    baho: 10
  },
  azizbek: {
    ism: "xasa",
    familiya: "xudoyberdiyev",
    age: '1234',
    baho: 100
  },
}


function runner(students) {
  const res = students[1]
  return res
}
for (const key in obj) {
  const baho = obj[key].baho

  baho > 0 && baho <= 20 ?
    console.log()
    : baho => 21 && baho <= 59 ?
      console.log()
      : console.log()


}
// for (const key in obj) {
//   const element = obj[key]
//   console.log(element.familiya, key)
// }

// for (const iterator in array) {
//   // console.log(iterator)
//   console.log(array[iterator])
// }


// for (const iterator of array) {
//   console.log(iterator)
// }

// forin

// forof
// 

let myInterval = 5
switch (myInterval) {
  case 0 - 2:
    //doStuffWithFirstRange();
    break

  case 3 - 6:
    console.log(5)
    //doStuffWithSecondRange();
    break

  case 6 - 7:
    //doStuffWithThirdRange();
    break

  default:
  //doStuffWithAllOthers();
}
