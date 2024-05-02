const algo = (arr) => {
  return ((arr[0] + arr[arr.length - 1]) / 2) * arr[arr.length - 1]
}


console.log(algo([1, 2, 3, 4, 5, 6, 7, 9, 10]))
// console.log(algo([1, 3, 4, 5, 6, 7, 9, 10]))