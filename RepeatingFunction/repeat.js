function repeatStringNumTimes (str, num) {
  let empty = "";
  for (let i = 0; i < num; i++) {
    empty = empty + str
  }
  return empty;
}

const result = repeatStringNumTimes ("abc", 3);
console.log(`Here is the result: ${result}`);