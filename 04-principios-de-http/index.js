//Protocolo HTTP es un estandar de la capa de transporte que permite comunicarnos con los clientes, el cliente pide y nosotros respondemos
//Para comunicarnos utilizamos un string (URL) como identificador del host y del recurso, Ej: "http://user:pass@cantero.com:80/account/data?key=value#hash" http: => protocolo; user:pass => autenticación; cantero.com => hostname; :80 => puerto; account/data => ruta (recurso y data); ?key=value => query/search

//Con node se pueden montar servidores que se conecten pediante HTTP, siendo una librería nativa "http", pero tambien existen librerías como EXPRESS, fastify, hapi, koa
console.clear();//Limpia todos los resultados anteriores, util para el nodemon

import { createServer } from "http";

const httpServer = createServer((req, res) => {//Es una función que se va a ejecutar una vez reciba una petición
    console.log("server: petición recibida");
    res.end("to client: recibido ");
});

httpServer.listen(3000);

//EXTENSION: thunder client

//process.exit();