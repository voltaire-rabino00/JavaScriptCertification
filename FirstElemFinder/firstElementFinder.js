function findElement (arr, test) {
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if(test(num)) {
        return num;
      }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));