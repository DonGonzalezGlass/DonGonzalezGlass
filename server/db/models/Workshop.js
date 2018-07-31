const Sequelize = require('sequelize');
const db = require('../db');

const Workshop = db.define('workshop', {
  category: {
    type: Sequelize.ENUM('glassblowing', 'glassCasting'),
  },
  dates: {
    type: Sequelize.STRING,
  },
  spotsRemaining: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Workshop;
