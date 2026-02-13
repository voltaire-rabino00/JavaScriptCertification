let lunches = [];

function addLunchToEnd (lunch) {
  lunches.push("Sushi");
  return `${lunch} added to the end of the lunch menu.`;
}
console.log(addLunchToEnd(lunches));


function addLunchToStart (itemStart) {
  lunches.unshift("Tempura");
  return `${itemStart} added to the start of the lunch menu.`
}
console.log(addLunchToStart(lunches));

function removeLastLunch (removeLunch) {
  if (lunches.pop()) {
    return `${removeLunch} removed from the end of the lunch menu.`;
  }
  else {
    return "No lunches to remove";
  }
}
console.log(removeLastLunch(lunches));

