let inventory = [];

const findProductIndex = (prodName) => {
  let product = [];
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
    console.log(`${prod.name} quantity updated`);
  } else {
    prod.name = prod.name.toLowerCase();
    inventory.push(prod);
    console.log(`${prod.name} added to inventory`);
  }
};

const removeProduct = (productName, quantity) => {
  const index = findProductIndex(productName);
  if (index === -1) {
    console.log(`${productName} not found`);
  } else if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`,
    );
  } else {
    inventory[index].quantity -= quantity;

    console.log(
      `Remaining ${productName} pieces: ${inventory[index].quantity}`,
    );

    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    }
  }
};
