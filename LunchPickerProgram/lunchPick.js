let lunches = [];

function addLunchToEnd (menu, item) {
  menu.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return menu;
}
addLunchToEnd(lunches, "Sushi");


function addLunchToStart (menu, item) {
  menu.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return menu;
}
addLunchToStart(lunches, "Tempura");



function removeLastLunch (menu,) {
  if (menu.length > 0 ) {
   let removedItem =  menu.pop();
   console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  else {
    console.log("No Lunches to remove.");
  }
   return menu;
}
removeLastLunch(lunches);


function removeFirstLunch (menu) {
  if (menu.length > 0) {
    let removedMenu = menu.unshift();
    console.log(`${removedMenu} removed from the start of the lunch menu.`);
  } 
  else {
    "No lunches to remove.";
  }
  return menu;
}
removeFirstLunch(lunches);

