"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTest = exports.helloWorld = void 0;
const test_1 = __importDefault(require("../models/test"));
const helloWorld = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const test = yield test_1.default.findAll();
    res.json({
        test: test,
    });
});
exports.helloWorld = helloWorld;
const createTest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existEmail = yield test_1.default.findOne({
            where: {
                correo: body.correo,
            },
        });
        if (existEmail) {
            return res.status(400).json({
                msg: "Ya existe un usuario con ese correo",
            });
        }
        const test = test_1.default.build(body);
        yield test.save();
        res.json({
            test,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor",
        });
    }
});
exports.createTest = createTest;
