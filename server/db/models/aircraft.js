'use strict';

const Sequelize = require('sequelize');
const db = require('../_db');

const Aircraft = db.define('aircraft', {
  make: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  year: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1903
    },
  },
  cost: {
    type: Sequelize.DECIMAL,
  },
  imageUrl: {
    type: Sequelize.STRING,
    get: function (value) {
      this.setDataValue('GFI', '$' + value + ',000,000')
    },
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },
  type: {
    type: Sequelize.ENUM,
    values: ['Attack', 'Bomber', 'Versatile', 'Transport', 'Reconoissance', 'Rescue']
  },
  description: {
    type: Sequelize.TEXT,
  },
});

Aircraft.getAircraftByType = input => {
  return Aircraft.findAll({
    where: {
      type: input,
    },
  });
};

module.exports = Aircraft;
