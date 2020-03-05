const express = require("express");
const router = express.Router();

const productListFile = __dirname + "/../../models/inventory.json";
const productList = require(productListFile);

router.get("/", (req, res) => {
  res.send(productList);
});

router.post("/:product", (req, res) => {
  res.send("you will create a product here");
});

router.put("/:product", (req, res) => {
  res.send("you will delete a product here you need warehouse and product");
});

module.exports = router;
