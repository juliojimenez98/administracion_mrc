"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const helloWorld = (req, res) => {
    res.json({
        msg: "Hola Mundo",
    });
};
exports.helloWorld = helloWorld;
