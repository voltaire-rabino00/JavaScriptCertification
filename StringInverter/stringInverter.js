function reverseString (str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const result = reverseString("Greetings from earth");
console.log(`This is reversed: ${result}`);