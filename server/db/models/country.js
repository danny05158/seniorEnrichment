const Sequelize = require('sequelize');
const db = require('../_db');

const Country = db.define('country', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  GFI: {
    type: Sequelize.INTEGER,
    get: function(val) {
      this.setDataValue('GFI', '$', +val + '000,000');
    },
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
