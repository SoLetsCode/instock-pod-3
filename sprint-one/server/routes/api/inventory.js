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
    res.status(400).send(`Product ${productId} already exists`);
  } else {
    const product = {
      description,
      name: title,
      id: productId,
      product: {
        Warehouse1: warehouseId === 1 ? quantity : 0,
        Warehouse2: warehouseId === 2 ? quantity : 0,
        Warehouse3: warehouseId === 3 ? quantity : 0
      }
    };
    //pushed object into existing array
    productList.push(product);
    writeJSONFile(productListFile, productList);
    res.send("Added product to inventory: " + JSON.stringify(product));
  }
});

router.delete("/:product", (req, res) => {
  const productId = req.params.product; //id of the product to delete
  const warehouseName = req.body.warehouseName;
  console.log(req.body);
  console.log(warehouseName);
  console.log(productId);
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
  return productList.find(p => p.id === uuid);
}

module.exports = router;
