const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.status(200).json(products);
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, products => {
    res.status(200).json(products);
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.status(200).json(products);
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.status(201).json({ message: 'post cart successfully' });
};
