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
    },
  },{
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Article);
      }
    }
});
  return User;
};




  //  location: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true
  //   },
  //   company: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true
  //   },
  //   contact: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true,
  //     validate: {
  //       isUrl: true
  //     }
  //   },
  //   website: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true,
  //     validate: {
  //       isUrl: true
  //     }
  //   },
  //   linkedIn: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true,
  //     validate: {
  //       isUrl: true
  //     }
  //   },
  //   facebook: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true,
  //     validate: {
  //       isUrl: true
  //     }
  //   },
  //   twitter: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true,
  //     validate: {
  //       isUrl: true
  //     }
  //   },
  //   github: {
  //    type: DataTypes.STRING,
  //     allowNull: false,
  //     isAlpha: true,
  //     validate: {
  //       isUrl: true
  //     }
  //   },
  // },
