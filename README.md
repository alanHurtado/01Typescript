# Typescript
## Configuración para trabajar adecuadamente con Typescript
- Generar el archivo de configuracion
```
tsc --init
```
- Configuracion en archivo tsconfig.json
```
 "target": "es2016",
 // ó  "target": "es6",
"outDir" : "./dist", // carpeta donde se recopila a js
"strict" : true,
"sourceMap": true,
"esModuleInterop": true,
"moduleResolution": "node",
```
### Ejecución, compilacion y tips

- tsc app.ts --> compila el programa generando los archivos .js
- tsc app.ts -w --> compila y mantiene activo a los cambios
- ts-node app.ts compila los dos comandos anteriores a la vez
- par mantener una ejecución activa utilizat nodemon archiv.js y tsc archivo.ts -w en terminales distintas.
---
\*npm i -y generar la configuración inicial de paquetes de node
### Si se genero el archivo de configuracion
```
tsc -w
```
```
nodemon  disnt/app.ts
```
### configurar con npm
---
```
npm i tsc-watch
```
En el archivo package.json generar el script siguiente
```
"buil": "tsc",
"start": "node disnt/app.js",
"dev": "tsc-watch --onSuccess \"node disnt/app.js\" "
```
ejecutar
```
npm run dev
```
## paquetes instalados

```
npm i express mongoose morgan bcrypt cors
npm i jsonwebtoken
npm i passport-jwt

```
##Configuración base de datos local
*** 
Obtener y configurar el archivo docker compose de ser necesario
Ejecutar el contenedor
```
docker-compose up -d
```
## Descripción de cada rama

1. main --> ejemplo basico clase de un usuario
2. api-rest-mongo-jwt --> Creacion de API REST con MONGO y NODE utilizando jwt para accedes con password
3.
4.
5.
6.
```
## paquetes de tipado
npm i @types/express
npm i @types/mongoose
npm i @types/morgan
npm i @types/bcrypt
npm i @types/jsonwebtoken
npm i @types/passport
npm i @types/passport-jwt
npm i @types/cors

```

