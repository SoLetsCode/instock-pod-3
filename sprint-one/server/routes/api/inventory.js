const express = require("express");
const router = express.Router();
const fs = require("fs");

const productListFile = __dirname + "/../../models/inventory.json";
const productList = require(productListFile);

function writeJSONFile(filename, content) {
  //use this to write to the JSON file when adding or deleting items
  // console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

router.get("/:product", (req, res) => {
  const productId = req.params.product;
  const product = findFromInventoryByUuid(productId);
  if (product === undefined) {
    res.send({});
  } else {
    res.send(product);
  }
});

router.get("/", (req, res) => {
  res.send(productList);
});

router.post("/:product", (req, res) => {
  // getting new product information out of request
  const productId = req.params.product;
  const title = req.body.title;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const warehouseId = req.body.warehouse;
  // created error if entry isn't complete
  if (
    productId === undefined ||
    title === undefined ||
    description === undefined ||
    quantity === undefined ||
    warehouseId === undefined
  ) {
    res.status(400).send("Missing information from required fields");
    //check if product exists. Don't add if it does
  } else if (findFromInventoryByUuid(productId) !== undefined) {
    //we have the product, now we need to check if the warehouse exists
    let index = productList.indexOf(findFromInventoryByUuid(productId));

    if (productList[index].product.hasOwnProperty(warehouseId)) {
      //warehouse exists, so add additional quantity to it
      let sum =
        Number(productList[index].product[warehouseId]) + Number(quantity);
      productList[index].product[warehouseId] = sum;
      res.send(
        `Added an additional ${quantity} of ${productId} at ${warehouseId}`
      );
    } else {
      //add warehouse and quantity of product.
      productList[index].product[warehouseId] = quantity;
      res.send(`Adding ${productId} to ${warehouseId}`);
    }

    writeJSONFile(productListFile, productList);
  } else {
    const product = {
      description,
      name: title,
      id: productId,
      product: {}
    };
    product.product[warehouseId] = Number(quantity);
    //pushed object into existing array
    productList.push(product);
    writeJSONFile(productListFile, productList);
    res.send("Added product to inventory: " + JSON.stringify(product));
  }
});

router.delete("/:product", (req, res) => {
  const productId = req.params.product; //id of the product to delete
  const warehouseName = req.body.warehouseName;

  let index = -1;
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].id === productId) {
      index = i;
    }
  }
  if (index === -1) {
    return res.send(
      `Product ${productId} could not be deleted because it doesn't exist`
    );
  } else {
    delete productList[index].product[warehouseName];
    writeJSONFile(productListFile, productList);
    res.send(`deleted ${productId} at ${warehouseName}`);
  }
});

function findFromInventoryByUuid(uuid) {
  return productList.find(p => p.name === uuid);
}

module.exports = router;
