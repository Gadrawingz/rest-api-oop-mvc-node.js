const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

// Product routes;
router.get("/products", ProductController.index);
router.get("/products/create", ProductController.createForm);
router.post("/products/create", ProductController.create);

module.exports = router;
