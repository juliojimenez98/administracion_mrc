import express, { Application } from "express";
import testRouter from "../routes/test";
import cors from "cors";
import bodyParser from "body-parser";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    test: "/api/test",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8091";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Se ha conectado a la base de datos exitosamente");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.apiPath.test, testRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto : ${this.port}`);
      console.log(
        process.env.DB_NAME!,
        process.env.DB_USERNAME!,
        process.env.DB_PASSWORD!
      );
    });
  }
}

export default Server;
