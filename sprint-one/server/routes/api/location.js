const express = require("express");
const router = express.Router();

const locationListFile = __dirname + "/../../models/location.json";
const locationList = require(locationListFile);

router.get("/", (req, res) => {
  res.send(locationList);
});

router.get("/:warehouse", (req, res) => {
  if (locationList[req.params.warehouse] === undefined) {
    res.status(404).send(`${req.params.warehouse} not found`);
  } else {
    res.send(locationList[req.params.warehouse]);
  }
});

module.exports = router;
