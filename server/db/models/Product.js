const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  specs: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  category: {
    type: Sequelize.ENUM(
      'vessel',
      'muranoGlass',
      'architechture',
      'sculpture',
      'portfolio'
    ),
  },
});

module.exports = Product;
