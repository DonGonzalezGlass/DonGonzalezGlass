const Sequelize = require('sequelize');
const db = require('../db')

const Workshops = db.define('workshops', {
  category: {
    type: Sequelize.ENUM('glassblowing', 'glassCasting')
  },
  dates: {
    type: Sequelize.STRING
  },
  spotsRemaining: {
    type: Sequelize.INTEGER
  }
})

module.exports = Workshops
