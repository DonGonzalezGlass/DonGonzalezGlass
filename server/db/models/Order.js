const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: null,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  shippingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  subtotal: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
  },
  shippingFee: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
    },
  },
  status: {
    type: Sequelize.ENUM('processing', 'canceled', 'shipped'),
    defaultValue: 'processing',
  },
});

module.exports = Order;

Order.prototype.getTotal = function() {
  return this.subtotal + this.shippingFee;
};
