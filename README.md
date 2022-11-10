# Typescript 
## Configuración para trabajar adecuadamente con Typescript
* Generar el archivo de configuracion 
```
tsc --init
```
* configuracion en archivo tsconfig.json
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
* tsc app.ts --> compila el programa generando los archivos .js
* tsc app.ts -w --> compila y mantiene activo a los cambios
* ts-node app.ts compila los dos comandos anteriores a la vez
* par mantener una ejecución activa utilizat nodemon archiv.js y tsc archivo.ts -w en terminales distintas.
#### Si se genero el archivo de configuracion
```
tsc -w 
```
```
nodemon  disnt/app.ts 
```

## Descripción de cada rama
1. main --> ejemplo basico clase de un usuario 
2. 

