function pyramid(str, num, bool) {
  let rows = [];
  for (let i = 0; i < num; i++) {
    let spaceString = " ".repeat(num - i - 1);
    let charString = str.repeat(2 * i + 1);
    let row = spaceString + charString;
    rows.push(row);

  }
  if (bool) {
    rows.reverse();
  }
  let result = "\n" + rows.join("\n") + "\n";
  return result;
}

let pyram = pyramid("o", 4, false);
console.log(pyram);