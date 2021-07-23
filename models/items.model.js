const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("item", {
    item: {
      type: DataTypes.STRING,
      isNull: false
    },
  }, { paranoid: true });
};