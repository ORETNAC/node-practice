//el concepto de sistema de modulos se refiere al Conjunto de utilidades que permiten comunicar diferentes partes del código Habitualmente cada parte se encuentra en archivos y carpetas separadas. Permite encapsular funcionalidades para reutilizarlas y es una buena práctica de seguridad.

//----------------------------------------------------------------------------------------------------------/
//CommonJS (CJS) es el sistema de modulos nativo de node
//Para especificar que queremos trabajar con CJS, en el package.json debemos especificar el ,"type": "commonjs",
//En caso de que trabajemos con "type": "module", podemos forzar el renderizado de un modulo CJS aplicando la extensión .cjs al archivo

const operaciones= require('./operaciones.cjs')
const usuario= require('./users.json')
const {suma, resta, multiplicacion}=operaciones;



console.log(suma);
console.log(usuario);
//-------------------------------------------------------/
//Console Comands
//Archivo package= npm init --y
//Librería JSON web token= npm i jsonwebtoken
const {} = require("jsonwebtoken");