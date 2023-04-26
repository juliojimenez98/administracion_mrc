import { Sequelize } from "sequelize";

const dbHost: string = process.env.DB_HOST ? process.env.DB_HOST : "";
const dbName: string = process.env.DB_NAME ? process.env.DB_NAME : "";
const dbUsername: any = process.env.DB_USERNAME ? process.env.DB_USERNAME : "";
const dbPassword: string = process.env.DB_PASSWORD
  ? process.env.DB_PASSWORD
  : "123";

const db = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: "postgres",
});

export default db;
