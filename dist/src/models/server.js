"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const test_1 = __importDefault(require("./routes/test"));
class Server {
    constructor() {
        this.apiPath = {
            test: "/api/test",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(this.apiPath.test, test_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto : ${this.port}`);
        });
    }
}
exports.default = Server;
