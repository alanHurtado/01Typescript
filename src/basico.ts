enum role {
  admin,
  developer,
  general,
}
interface Data {
  nombre: string;
  msg: string;
}
interface NuevoTipo {
  nombre: string;
  tipo: string;
  valor: number[];
  id: number;
  estado: boolean;
  rol: role;
}

export const tiposBasicos = () => {
  //Tipos basicos de datos
  const numero: number = 9;
  const frase: string = "Esto es una frase o string";
  const condicion: boolean = true;

  console.log(`${condicion ? frase : numero}`);
};

export const crearTipos = () => {
  const nuevoTipo: NuevoTipo = {
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

export const saludo = (datos: Data) => {
  console.log(datos.msg + " " + datos.nombre);
};
