const express = require("express");
const router = express.Router();
const fs = require("fs");

const productListFile = __dirname + "/../../models/inventory.json";
const productList = require(productListFile);

function writeJSONFile(filename, content) {
  //use this to write to the JSON file when adding or deleting items
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

router.get("/", (req, res) => {
  res.send(productList);
});

router.post("/:product", (req, res) => {
  const productId = req.params.product;
  const title = req.body.title;
  const description = req.body.description;
  const quantity = req.body.quantity;
  const warehouseId = req.body.warehouse;
  if (
    productId === undefined ||
    title === undefined ||
    description === undefined ||
    quantity === undefined ||
    warehouseId === undefined
  ) {
    res.status(400).send("Missing information from required fields");
  }
  res.send(
    "you will create a product here" +
      productId +
      title +
      description +
      quantity +
      warehouseId
  );
});

router.put("/:product", (req, res) => {
  res.send("you will delete a product here you need warehouse and product");
});

module.exports = router;
