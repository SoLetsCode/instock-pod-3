const express = require("express");
const router = express.Router();

const warehouseListFile = __dirname + "/../../models/warehouse.json";
const warehouseList = require(warehouseListFile);

router.get("/", (req, res) => {
  res.send(warehouseList);
});

module.exports = router;
