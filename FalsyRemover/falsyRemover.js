const bouncer = (arr) => {
  let bounce = [];
   bounce = arr.filter(Boolean);
  return bounce;
}

let result = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];

console.log(bouncer(result));