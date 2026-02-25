function chunkArrayInGroups (arr, size) {
  let newArr = [];
  for(let i = 0; i < arr.length; i+= size){
  let newArray = arr.slice(i, i + size);
    newArr.push(newArray);
  }
  return newArr;
}
const arrList = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(`Ito ang ArrList: ${arrList}`);