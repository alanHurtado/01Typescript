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
exports.checkUserEmailPassword = exports.oAuthUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const __1 = require("..");
const user_1 = __importDefault(require("../models/user"));
const oAuthUser = (oAuthEmail, oAuthName) => __awaiter(void 0, void 0, void 0, function* () {
    yield __1.db.conect();
    const user = yield user_1.default.findOne({ email: oAuthEmail });
    if (user) {
        yield __1.db.disconnect();
        const { _id, name, email, role } = user;
        return { _id, name, email, role };
    }
    const newUser = new user_1.default({ email: oAuthEmail, name: oAuthName, password: "@", role: "client" });
    yield newUser.save();
    yield __1.db.disconnect();
    const { _id, name, email, role } = newUser;
    return { _id, name, email, role };
});
exports.oAuthUser = oAuthUser;
const checkUserEmailPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield __1.db.conect();
    const user = yield user_1.default.findOne({ email });
    yield __1.db.disconnect();
    if (!user) {
        return null;
    }
    if (!bcrypt_1.default.compareSync(password, user.password)) {
        return null;
    }
    const { role, name, _id } = user;
    return {
        _id,
        email: email.toLocaleLowerCase(),
        role,
        name,
    };
});
exports.checkUserEmailPassword = checkUserEmailPassword;
//# sourceMappingURL=dbUser.js.map