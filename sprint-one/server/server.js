const express = require("express");
const app = express();

//middleware - this gets run on each call
app.use(express.json()); // this is so we can access req.body

//routes
const warehouse = require("./routes/api/warehouse.js");
const product = require("./routes/api/product.js");

//URLs to access each API
app.use("/api/warehouse", warehouse);
app.use("/api/product", product);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
