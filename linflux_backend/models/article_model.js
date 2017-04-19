'use strict';
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    hero: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        isUrl: true
      }
    },
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    },
    sDescript: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Article.belongsTo(models.User)
      }
    }
  });
  return Article;
};
