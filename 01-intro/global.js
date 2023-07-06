//console.log(process);

//----------------------------------------------------------------------------------------------------------/
// console.log('Hola mundo');

// process.exit(); //Mata el proceso, al tener un servidor complejo puede ser util para desconectar cosas antes de que ocurran, escuchamos eventos y luego matamos el proceso

// console.log('Adios');

//----------------------------------------------------------------------------------------------------------/

//console.log(process.env);// nos da acceso a variables de entorno, un valor dinamico que puede alterar el funcionamiento de la aplicación, puertos, usuario y contraseña de una base de datos, clave secreta para JSON web tokens, etc

//----------------------------------------------------------------------------------------------------------/
// SISTEMA DE MODULOS => Nos permite importar y exportar archivos, creamos un punto de acceso en el que un archivo invoca al resto. Node trae COMMONJS o ECMA SCRIPT MODULES (ESM).
//-----------------------------------------------------/
//COMMONJS
// console.log('file:'+__filename,'dir:'+__dirname);
//import { suma } from "./01.1-suma01"; // Error al importar

//const {suma:sum} = require("./01.1-suma"); //Es la forma correcta de hacer un import

// console.log('resultado:'+sum(5,1));
//---------------------------/

global.valor=415421;
const {suma:sum} = require("./suma"); // La variable global tiene que ser definida antes de importar, va en orden.

