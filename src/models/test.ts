import { DataTypes } from "sequelize";
import db from "../db/connection";

const Test = db.define(
  "test",
  {
    nombre: { type: DataTypes.STRING },
    edad: { type: DataTypes.NUMBER },
    correo: { type: DataTypes.STRING },
  },
  { timestamps: false, freezeTableName: true }
);

export default Test;
