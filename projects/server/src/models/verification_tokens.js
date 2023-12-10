"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class verification_tokens extends Model {
        static associate({ users }) {
            this.belongsTo(users, { foreignKey: "users_id" });
        }
    }
    verification_tokens.init(
        {
            token: DataTypes.STRING,
            is_valid: DataTypes.BOOLEAN,
            valid_until: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "verification_tokens",
        }
    );
    return verification_tokens;
};
