function c() {
  console.log("C Ishladi!")
}

function b() {
  console.log("B ishladi")
  setTimeout(c, 1000)
}



function a() {
  console.log("A Ishaldi!")
  setTimeout(b, 100)
}
setTimeout(a, 100)