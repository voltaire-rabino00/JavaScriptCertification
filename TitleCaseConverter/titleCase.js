function titleCase(str) {
  let newStr = str.split(" ");

  for (let i = 0; i < newStr.length; i++) {
    newStr[i].charAt(0).toUpperCase();
    newStr[i].slice(1).toLowerCase();
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }

  return newStr.join(" ");
}

let result = "i love javascript";
console.log(titleCase(result));
