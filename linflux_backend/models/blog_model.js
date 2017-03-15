'use strict'

module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define('Blog', {
    hero: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        isUrl: true
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    sDescript: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    }
  });
  return Blog;
};
