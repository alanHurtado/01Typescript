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
exports.signIn = exports.signUp = void 0;
const __1 = require("..");
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const signUp = (req, res) => {
    registerUser(req, res);
};
exports.signUp = signUp;
const signIn = (req, res) => {
    res.send('enviado');
};
exports.signIn = signIn;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email = "", password = "", name = "" } = req.body;
    yield __1.db.conect();
    const user = yield user_1.default.findOne({ email });
    if (password.length < 6) {
        return res.status(400).json({
            message: "La contraseña debe de ser de 6 caracteres",
        });
    }
    if (name.length < 2) {
        return res.status(400).json({
            message: "Nombre demasiado corto",
        });
    }
    //TODO: Crear validacion de email
    if (user) {
        yield __1.db.disconnect();
        return res.status(400).json({ message: "EL correo ya ha sido registrado" });
    }
    const newUser = new user_1.default({
        email: email.toLocaleLowerCase(),
        password: bcrypt_1.default.hashSync(password, 10),
        role: "client",
        name,
    });
    try {
        yield newUser.save({ validateBeforeSave: true });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Revisar logs de servidor" });
    }
    const { _id, role } = newUser;
    // const token = jwt.signToken({ _id, email });
    return res.status(200).json({
        // token: token,
        user: {
            email,
            role,
            name,
        },
        message: "Acceso Autorizado:",
    });
});
//# sourceMappingURL=use.controlers.js.map