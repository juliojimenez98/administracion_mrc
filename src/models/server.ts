import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import testRouter from "./routes/test";

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    test: "/api/test",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.apiPath.test, testRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto : ${this.port}`);
    });
  }
}

export default Server;
