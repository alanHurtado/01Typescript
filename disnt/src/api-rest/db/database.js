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
exports.disconnect = exports.conect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
var mongoStatusConnection;
(function (mongoStatusConnection) {
    mongoStatusConnection[mongoStatusConnection["disconnected"] = 0] = "disconnected";
    mongoStatusConnection[mongoStatusConnection["connected"] = 1] = "connected";
    mongoStatusConnection[mongoStatusConnection["connecting"] = 2] = "connecting";
    mongoStatusConnection[mongoStatusConnection["disconnecting"] = 3] = "disconnecting";
})(mongoStatusConnection || (mongoStatusConnection = {}));
let mongoConnection = mongoStatusConnection.disconnected;
const conect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoConnection) {
        console.log(mongoStatusConnection.connected);
        console.log("Ya existe una conexión a la BD");
        return;
    }
    if (mongoose_1.default.connections.length > mongoStatusConnection.disconnected) {
        mongoConnection = mongoose_1.default.connections[0].readyState;
        if (mongoConnection === mongoStatusConnection.connected) {
            console.log("Usando conexión anterior");
            return;
        }
        yield mongoose_1.default.disconnect();
    }
    yield mongoose_1.default.connect(config_1.default.DB.URI);
    mongoConnection = mongoStatusConnection.connected;
    console.log("Mongodb connection stablished");
});
exports.conect = conect;
const disconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoConnection === mongoStatusConnection.disconnected)
        return;
    yield mongoose_1.default.disconnect();
    mongoConnection = mongoStatusConnection.disconnected;
    console.log("Desconectado de MongoDB");
});
exports.disconnect = disconnect;
//# sourceMappingURL=database.js.map