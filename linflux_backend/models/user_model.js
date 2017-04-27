'use strict';
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      len: [7, 14]
    },
    userPhoto: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      len:[2, 50]
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: true,
      isAlpha: true,
      len:[2, 50]
    },
    location: {
      type:DataTypes.STRING,
      allowNull: true,
      isAlpha: true
    },
    company: {
      type:DataTypes.STRING,
      allowNull: true,
      sAlpha: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Article)
      }
    },
    instanceMethods: {
      validPassword: function(password) {
      return bcrypt.compareSync(password, this.password);
      }
    },
    hooks: {
      beforeCreate: function(user, options) {
        const SALT_FACTOR = 10;
            if (!user.changed('password')) {
              return sequelize.Promise.reject("not modified");
            }
        return bcrypt.genSaltAsync(SALT_FACTOR).then(function(salt) {
          return bcrypt.hashAsync(user.password, salt, null);
        })
        .then(function(hash) {
          user.setDataValue('password', hash);
        })
        .catch(function(err) {
          return sequelize.Promise.reject(err);
        });
      }
    }
  });
  return User;
};
