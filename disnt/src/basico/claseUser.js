"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor() {
        this.name = "09-09-19996";
        this.email = "example@gmail.com";
        this.anio = 1996;
    }
    printData() {
        console.log("Los datos del usuario actual son");
    }
    dataprivada() {
        console.log(`El correo ${this.email} del usuario ${this.name} se creo en el año ${this.anio}`);
    }
}
exports.default = User;
//# sourceMappingURL=claseUser.js.map