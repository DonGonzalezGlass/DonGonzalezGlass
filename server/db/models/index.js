const db = require('../db');
const Admin = require('./Admin');
const Order = require('./Order');
const Photo = require('./Photo');
const Product = require('./Product');
const Workshop = require('./Workshop');

//associations
Product.belongsToMany(Order, { through: 'productOrder' });
Order.belongsToMany(Product, { through: 'productOrder' });

Product.hasMany(Photo);
Photo.belongsTo(Product);

module.exports = {
  db,
  Admin,
  Order,
  Photo,
  Product,
  Workshop,
};
