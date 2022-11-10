import User from "./src/claseUser";
import { tiposBasicos, crearTipos, saludo } from "./src/basico";
const user = new User();
user.dataprivada();

//Conceptos Básicos
tiposBasicos();
crearTipos();
const data = {
  nombre: "Alan",
  msg: "Ten un lindo dia",
};
saludo(data);
