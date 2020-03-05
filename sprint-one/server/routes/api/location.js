const express = require("express");
const router = express.Router();

const locationListFile = __dirname + "/../../models/location.json";
const locationList = require(locationListFile);

router.get("/", (req, res) => {
  res.send(locationList);
});

module.exports = router;
