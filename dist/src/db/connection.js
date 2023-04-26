"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbHost = process.env.DB_HOST ? process.env.DB_HOST : "";
const dbName = process.env.DB_NAME ? process.env.DB_NAME : "";
const dbUsername = process.env.DB_USERNAME ? process.env.DB_USERNAME : "";
const dbPassword = process.env.DB_PASSWORD
    ? process.env.DB_PASSWORD
    : "123";
const db = new sequelize_1.Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: "postgres",
});
exports.default = db;
