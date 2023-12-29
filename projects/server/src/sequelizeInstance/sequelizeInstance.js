const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "avnadmin",
  password: "AVNS_bz3ho8ZiwNxBQaudDmw",
  database: "defaultdb",
  host: "techhaven-ravansaoktaviano.a.aivencloud.com",
  dialect: "mysql",
  port: 16849,
  dialectModule: require("mysql2"),
});

module.exports = sequelize;
