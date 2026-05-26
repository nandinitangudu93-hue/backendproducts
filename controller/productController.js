const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json(products);
};

const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  await newProduct.save();

  res.json(newProduct);
};

module.exports = {
  getProducts,
  addProduct,
};