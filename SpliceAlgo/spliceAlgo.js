function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice(); 
  localArray.splice(n, 0, ...arr1); 
  return localArray;
}

let result = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log("Result:", result);