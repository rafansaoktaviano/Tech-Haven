const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "upa5smrwdzoll6fs",
  password: "DJL3FZAIJ9N4SwrJCNYI",
  database: "brvo4inoxlkicfyc6hnt",
  host: "brvo4inoxlkicfyc6hnt-mysql.services.clever-cloud.com",
  dialect: "mysql",
  dialectModule: require("mysql2"),
});

module.exports = sequelize;
