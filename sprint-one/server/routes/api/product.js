const express = require("express");
const router = express.Router();

const productListFile = __dirname + "/../../models/product.json";
const productList = require(productListFile);

router.get("/", (req, res) => {
  res.send(productList);
});

module.exports = router;
