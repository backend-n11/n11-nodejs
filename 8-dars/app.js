function minMax(arr) {
  // Base case: array with one element
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }
  console.log(arr);
  // Recursive call with the remaining elements
  const remainingMinMax = minMax(arr.slice(1));

  // Compare current element with existing min and max
  const current = arr[0];
  const min = remainingMinMax[0] < current ? remainingMinMax[0] : current;
  const max = remainingMinMax[1] > current ? remainingMinMax[1] : current;

  // Return the updated min and max
  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5, 5, 10]));
