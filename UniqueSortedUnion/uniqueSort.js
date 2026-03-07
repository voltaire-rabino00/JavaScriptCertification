const uniteUnique = (...arrg) => {
    let newArr = [];
  for (let i = 0; i < arrg.length; i++) {   
    for (let j = 0; j < arrg[i].length; j++ ) {
      if (!newArr.includes(arrg[i][j])) {
       newArr.push(arrg[i][j]);
      }
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));