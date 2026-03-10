const sumAll = (arr) => {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let n = (max - min) + 1;
  return (n * (min + max)) / 2;
}
console.log(sumAll([1, 4]));  
console.log(sumAll([4, 1]));  
