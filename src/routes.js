const express = require("express");
const router = express.Router();
const productInfo = require("./scraping");

router.get("/product-info", async (req, res) => {
  const rawUrl = req.query.url;
  const url = rawUrl.split("?")[0];
  const product = await productInfo(url);
  res.send(product);
});

module.exports = router;
