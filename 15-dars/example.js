function greet(callback1, callback2, callback3) {
  const result = callback2(callback3)
  // console.log(result)
  callback1(result)
}
function callback1(callback) {
  callback()
}
function callback2(callback) {
  callback()
  return () => {
    console.log("CLOSURE")
  }
}
function callback3() {
  console.log("CALLBAK 3")
}

greet(callback1, callback2, callback3)