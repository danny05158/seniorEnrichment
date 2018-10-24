const Sequelize = require('sequelize');
const {db} = require('../_db');
//new destructure db

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  GFI: {
    type: Sequelize.INTEGER
  },
  flagUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Portugal_Presidential_Flag.png',
  },
});

Country.getTopFive = function() {
  return Country.findAll({
    limit: 5,
    order: [['GFI', 'ASC']],
  });
};

module.exports = Country;
