let inventory = [];

const findProductIndex = (prodName) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === prodName.toLowerCase()) {
      return i;
    }
  }
  return -1;
};

const addProduct = (prod) => {
  const index = findProductIndex(prod.name);
  if (index !== -1) {
    inventory[index].quantity += prod.quantity;
    console.log(`${prod.name.toLowerCase()} quantity updated`);
  } else {
    prod.name = prod.name.toLowerCase();
    inventory.push(prod);
    console.log(`${prod.name} added to inventory`);
  }
};

const removeProduct = (productName, quantity) => {
  const index = findProductIndex(productName);
  const prodNameLower = productName.toLowerCase();
  if (index === -1) {
    console.log(`${prodNameLower} not found`);
  } else if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${prodNameLower} available, remaining pieces: ${inventory[index].quantity}`,
    );
  } else {
    inventory[index].quantity -= quantity;

    console.log(
      `Remaining ${prodNameLower} pieces: ${inventory[index].quantity}`,
    );

    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    }
  }
};

addProduct({name: "FLOUR", quantity: 5});


