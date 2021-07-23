const sequelize = require("../config/db.config");

const items = require("./items.model")(sequelize);

module.exports = { items };