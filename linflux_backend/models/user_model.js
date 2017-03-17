'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
     type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    }
  },{
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Article);
      }
    }
});
  return User;
};
