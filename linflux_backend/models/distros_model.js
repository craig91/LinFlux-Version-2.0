'use strict';
module.exports = function(sequelize, DataTypes) {
  var Distros = sequelize.define('Distros', {
    dImage: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Distros;
};
