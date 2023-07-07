//Protocolo HTTP es un estandar de la capa de transporte que permite comunicarnos con los clientes, el cliente pide y nosotros respondemos
//Para comunicarnos utilizamos un string (URL) como identificador del host y del recurso, Ej: "http://user:pass@cantero.com:80/account/data?key=value#hash" http: => protocolo; user:pass => autenticación; cantero.com => hostname; :80 => puerto; account/data => ruta (recurso y data); ?key=value => query/search

//Con node se pueden montar servidores que se conecten pediante HTTP, siendo una librería nativa "http", pero tambien existen librerías como EXPRESS, fastify, hapi, koa
console.clear();//Limpia todos los resultados anteriores, util para el nodemon

import { createServer } from "http";

const httpServer = createServer((req, res) => {//Es una función que se va a ejecutar una vez reciba una petición
    //Temas por cubrir:
    //Verbo o metodo----------------------------------------------------------
    //----console.log(req.method);
    //GET se utiliza para obtener una página web, una imagen o cualquier otro recurso, suele ir acompañado del recurso que queremos obtener y por estandar NO LLEVA body-------------------------------------
    //DELETE lo mismo que el GET
    //POST crea elementos en nuestro backEnd, lleva body con la información para crear pero si el elemento ya existe arroja error
    //PUT tambien sirve para crear, con la peculiaridad que si un elemento ya existe lo reemplazará.


    //Path o ruta para identificar el recurso
    //----console.log(req.url);
    //Sistema de logica para filtrar por todas las rutas o herramientas externas


    //cabecera (header)
    //---console.log(req.headers)


    //en ciertos tipos de peticiones el body/payload
    //---console.log(req+'???');
    //No existe un metodo, meadiante un stream se deben ir acumulando datos hasta obtener el body, se hace de esta manera puesto que no se tiene certeza de cuanto puede llegar a pesar

    let data = '';
    let chunkIndex=0;


    req.on("data",(chunk)=>{
        data+=chunk;
        chunkIndex++;
        console.log('veces que se repitió:'+chunkIndex+' Veces');
    })

    req.on("end",()=>{
        //console.log(data); con el data no se puede visualizar el json
        console.log("server: petición recibida");
        res.end("to client: recibido ");
    });


});

httpServer.listen(3000);

//EXTENSION: thunder client

//process.exit();