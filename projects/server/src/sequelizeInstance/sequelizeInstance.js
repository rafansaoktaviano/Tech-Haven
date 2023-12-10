const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "adminer2.purwadhikabootcamp.com",
  username: "jcwd250203",
  password: "jcwd250203",
  database: "jcwd250203",

});

module.exports = sequelize;