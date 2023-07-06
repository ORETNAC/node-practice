//el concepto de sistema de modulos se refiere al Conjunto de utilidades que permiten comunicar diferentes partes del código Habitualmente cada parte se encuentra en archivos y carpetas separadas. Permite encapsular funcionalidades para reutilizarlas y es una buena práctica de seguridad.
//----------------------------------------------------------------------------------------------------------/
//ECMA script modules (ESM) el formato estándar oficial para empaquetar el código JavaScript para su reutilización
//Para especificar que queremos trabajar con ESM, en el package.json debemos especificar el ,"type": "modules",
//En caso de que trabajemos con "type": "commonjs", podemos forzar el renderizado de un modulo ESM aplicando la extensión .mjs al archivo

//-------------------------------------------------------/
//Console Comands
//Archivo package= npm init --y
//Librería JSON web token= npm i jsonwebtoken

//import {suma,resta,multiplicacion} from "./operaciones.mjs";//Importando un objeto con propiedades nombradas
//import {suma} from "./operaciones.mjs";// Una ventaja de importar un objeto con propiedades nombradas es que sé puede importar solo lo necesario, se le conoce como tree shaking

import operaciones from "./operaciones.mjs"; //Importando dafault las funciones como variable para desestructurarlas.
const { suma, resta, multiplicacion } = operaciones;

console.log(operaciones.multiplicacion);
console.log('5+3=' + operaciones.suma(5, 3));
console.log('5-3=' + resta(5, 3));

console.log(import.meta.url);

import { createRequire } from 'module'
const require = createRequire(import.meta.url);
const usuarios = require('./users.json')
console.log(usuarios);

//https://nodejs.org/dist/latest-v18.x/docs/api/esm.html //-------------------------------------------------------/
