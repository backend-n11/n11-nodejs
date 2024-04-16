let JsonParser = {
  parse(a) {
    return JSON.parse(a)
  },
  stringfy(b) {
    return JSON.stringify(b)
  }
}
let obj = { a: 1, b: 2 }
let json = JsonParser.stringfy(obj)

console.log(JsonParser.parse(json))










/*

//BANKKAMAt
1. bankkamat Object
2. sum, foiz // => property
3. olish, solish //=> method
{
  name:
  getSum: 10000
  card: 200000
}
*/
