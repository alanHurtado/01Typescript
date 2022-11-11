"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
//setting
exports.app.set("port", process.env.PORT || 3000);
//middlewares
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(express_1.default.json());
//routes
exports.app.get("/", (req, res) => {
    res.send(`The API is http://localhost:${exports.app.get("port")}`);
});
//# sourceMappingURL=server.js.map