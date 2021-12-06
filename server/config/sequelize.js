"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    define: {
        freezeTableName: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
exports.default = sequelize;
