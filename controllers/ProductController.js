const Product = require("../models/Product");

class ProductController {
  // 01. Render form to create a new product
  static createForm(req, res) {
    res.render("products/create");
  }
  // Handle the creation of a new product
  static async create(req, res) {
    try {
      const { name, price, description } = req.body;
      await Product.create({ name, price, description });
      res.redirect("/products");
    } catch (err) {
      res.status(500).send("Error creating product");
    }
  }

  // 02. Render all the products
  static async index(req, res) {
    try {
      const products = await Product.findAll();
      res.render("products/index", { products });
    } catch (error) {
      res.status(500).send("Error fetching products");
    }
  }
}

module.exports = ProductController;
