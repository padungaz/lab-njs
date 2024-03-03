const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body);
  product.save();
  res.status(201).json({ message: 'User added successfully' });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.status(200).json(products);
  });
};
