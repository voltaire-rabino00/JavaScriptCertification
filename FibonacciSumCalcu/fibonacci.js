const sumFibs = (num) => {
  let a = 1;
  let b = 1;
  let result = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      result += a;
    }
    let next = a + b;
    a = b;
    b = next;
  }
  return result;
}
console.log(sumFibs(1000));