function findLongestWordLength (word) {
  let count = 0;
  const words = word.split(' ');
  for (const word of words) {
    let wordLength = word.length;
    if (wordLength > count) {
      count = wordLength;
    }
  }
  return count;
}

const wordCount = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(`The longest word is: ${wordCount}`);