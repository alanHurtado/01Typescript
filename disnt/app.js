"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const claseUser_1 = __importDefault(require("./src/claseUser"));
const basico_1 = require("./src/basico");
const user = new claseUser_1.default();
user.dataprivada();
//Conceptos Básicos
(0, basico_1.tiposBasicos)();
(0, basico_1.crearTipos)();
const data = {
    nombre: "Alan",
    msg: "Ten un lindo dia",
};
(0, basico_1.saludo)(data);
//# sourceMappingURL=app.js.map