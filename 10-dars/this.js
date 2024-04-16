let str = ''

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i)
}
console.log(str)

console.log(String.fromCharCode(66))