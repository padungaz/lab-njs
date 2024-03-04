const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.status(201).json({ message: 'product added successfully' });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.status(200).json(products);
  });
};
