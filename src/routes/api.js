// Task 2: Express.js Route

const express = require("express");
const {
  createProduct,
  getProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getProduct);

module.exports = router;
