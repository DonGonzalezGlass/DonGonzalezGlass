const Sequelize = require('sequelize');
const db = require('../db')

const Products = db.define('products', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  specs: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  category: {
    type: Sequelize.ENUM('vessel', 'muranoGlass')
  }
})

module.exports = Products
