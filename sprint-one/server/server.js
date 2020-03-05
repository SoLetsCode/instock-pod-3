const express = require("express");
const app = express();

//middleware - this gets run on each call
app.use(express.json()); // this is so we can access req.body

//routes
const location = require("./routes/api/location.js");
const inventory = require("./routes/api/inventory.js");

//URLs to access each API
app.use("/api/location", location);
app.use("/api/inventory", inventory);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
