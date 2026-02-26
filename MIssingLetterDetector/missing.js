function fearNotLetter (rng) {
  for (let i = 0; i < rng.length - 1; i++) {
    if(rng.charCodeAt(i + 1) !== rng.charCodeAt(i) + 1) {
      return String.fromCharCode(rng.charCodeAt(i) + 1);
    }
  }
  return undefined;
}

console.log("RESULT:", fearNotLetter("abce"));