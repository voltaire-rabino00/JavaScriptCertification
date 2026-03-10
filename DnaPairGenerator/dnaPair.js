const pairElement = (str) => {
  let dna = [];
  for (let i = 0; i < str.length; i++) {
    let base = str[i];

    if (base === "A") {
      dna.push(["A", "T"]);
    } else if (base === "T") {
      dna.push(["T", "A"]);
    } else if (base === "C") {
      dna.push(["C", "G"]);
    } else if (base === "G") {
      dna.push(["G", "C"]);
    }
  }
  return dna;
};
console.log(pairElement("ATCG"));
