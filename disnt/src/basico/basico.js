"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saludo = exports.crearTipos = exports.tiposBasicos = void 0;
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["developer"] = 1] = "developer";
    role[role["general"] = 2] = "general";
})(role || (role = {}));
const tiposBasicos = () => {
    //Tipos basicos de datos
    const numero = 9;
    const frase = "Esto es una frase o string";
    const condicion = true;
    console.log(`${condicion ? frase : numero}`);
};
exports.tiposBasicos = tiposBasicos;
const crearTipos = () => {
    const nuevoTipo = {
        nombre: "alan",
        tipo: "Creado",
        valor: [1, 2, 3],
        id: 1,
        estado: true,
        rol: role.general,
    };
    console.log(nuevoTipo);
    console.log(nuevoTipo.nombre);
};
exports.crearTipos = crearTipos;
const saludo = (datos) => {
    console.log(datos.msg + " " + datos.nombre);
};
exports.saludo = saludo;
//# sourceMappingURL=basico.js.map