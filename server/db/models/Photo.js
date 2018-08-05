const Sequelize = require('sequelize');
const db = require('../db');

const Photo = db.define('photo', {
  filePath: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Photo;
