function mutation (mutate) {
  let target = mutate[0].toLowerCase();
  let test = mutate[1].toLowerCase();

  for (let i = 0; i < test.length; i++) {
  target.indexOf(test[i]);
  if (target.indexOf(test[i]) < 0) {
    return false;
   }
  }
  return true;
}

const result = mutation(["Hello", "asdqwdasd"]);
console.log(`The result is: ${result}`);