const dropElements = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); 
  }
  return arr;
}

const ilaw = dropElements([1, 2, 3, 4], (n) => n >= 3); 
console.log(ilaw); 