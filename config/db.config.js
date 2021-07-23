const { DB_NAME, DB_USER, DB_PASSWORD, DB_DIALECT } = require("../config");
const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: DB_DIALECT,
  logging: false,
});

module.exports = sequelize;