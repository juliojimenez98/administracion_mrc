"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Test = connection_1.default.define("test", {
    nombre: { type: sequelize_1.DataTypes.STRING },
    edad: { type: sequelize_1.DataTypes.NUMBER },
    correo: { type: sequelize_1.DataTypes.STRING },
}, { timestamps: false, freezeTableName: true });
exports.default = Test;
