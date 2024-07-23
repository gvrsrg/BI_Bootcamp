const {
  getAllProduct,
  getOneProduct,
  insertProduct,
} = require("../controllers/products.controller.js");
const express = require("express");

const router = express.Router();

router.get("/api/products", getAllProduct);
router.get("/api/products/:id", getOneProduct);

/** insert a product - post */
router.post("/api/products", insertProduct);

module.exports = {
  router,
};
