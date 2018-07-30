const Sequelize = require('sequelize');
const db = require('../db')

const Photos = db.define('photos', {
  filePath: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Photos
