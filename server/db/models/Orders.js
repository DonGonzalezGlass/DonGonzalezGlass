const Sequelize = require('sequelize');
const db = require('../db')

const Orders = db.define('orders', {
  date: {
    type: Sequelize.DATE,
    defaultValue: null
  },
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  shippingAdress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  subtotal: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  shippingFee: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  status: {
    type: Sequelize.ENUM('processing', 'canceled', 'shipped'),
    defaultValue: 'processing'
  }
})

module.exports = Orders

Orders.prototype.getTotal = function() {
  return this.subtotal + this.shippingFee
}
