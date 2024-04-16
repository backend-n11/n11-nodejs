
function canNest(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j])
      if (arr1[i] === arr2[j])
        return false
    }
  }
  return true
}

console.log(
  canNest([1, 2, 3, 4], [0, 6])
)
/*
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false*/