const Sequelize = require('sequelize');
const {db} = require('../_db');
//new destructure db


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
      max: 2018,
      min: 1903
    },
  },
  cost: {
    type: Sequelize.DECIMAL,
    get() {
      return this.getDataValue('cost') + 'm';
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    defaultValue: ''
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
