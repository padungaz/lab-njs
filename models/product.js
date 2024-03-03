const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(data) {
    this.data = data;
  }

  save() {
    const p = path.join('data', 'products.json')
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this.data);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join('data', 'products.json')
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
