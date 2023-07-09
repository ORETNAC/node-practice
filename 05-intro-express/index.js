console.clear();
import express from 'express';

const PORT = 3000;
const expressServer = express();

expressServer.listen(PORT, () => {//Un listener de cuando se acceda a el puerto especificado
    console.log(`Servidor levantado en el puerto ${PORT}`)
});

/////////////////////////////////////////////////////////////////////////////////////

// expressServer.get('/mi-cuenta',(req,res)=>{ // Se está filtrando para qué caso [URL] se va a filtrar esa función que se pasa como segundo parametro, por lo tanto la respuesta solo se dará para la ruta '/mi-cuenta' y si es un GET.
//     res.send('Tu Cuenta personal');
// });

expressServer.post('/mi-cuenta', (req, res) => { // De esta manera se consiguen 2 funciones separadas, una para el get y otra para el put ambas correspondientes para el directorio '/mi-cuenta'
    res.send('Tus datos han sido agregados');
});
// /////////////////////////////////////////////////////////////////////////////////
// expressServer.all('/mi-cuenta',(req,res)=>{//Recibe todos los verbos o tipo de peticiones a la vez y realiza una función.
//     console.log('evento especial... medición de trafico por ejemplo...');
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////IMPORTANT 'params' property------------------------------------------------------------------------------------------------
expressServer.get('/mi-cuenta/:user/:password', (req, res) => {//En ciertas ocaciones se requieren parametros en la ruta, por ejemplo identificadores de usuario, si ponemos solo '/mi-cuenta' no servirá de mucho porque es algo estatico, por lo tanto se utiliza ':idcuenta' para decirle a la función que todo lo que venga despues del : es lo que necesito como identificador
    //Cuidado con los caracteres especiales en las rutas con valor dinamico, contraseña da muchos problemas por la Ñ
    console.log(req.ip);//
    res.send('info de cuenta get 1');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////'headers' property
expressServer.post('/mi-cuenta/:user/:password', (req, res) => {//En ciertas ocaciones se requieren parametros en la ruta, por ejemplo identificadores de usuario, si ponemos solo '/mi-cuenta' no servirá de mucho porque es algo estatico, por lo tanto se utiliza ':idcuenta' para decirle a la función que todo lo que venga despues del : es lo que necesito como identificador
    //Cuidado con los caracteres especiales en las rutas con valor dinamico, contraseña da muchos problemas por la Ñ
    console.log(req.headers);//
    console.log(req.get('user-agent'));// Utilizar el req.get para obtener valor de las cabeceras, se pueden almacenar en variables para operarlas según sea conveniente
    res.send('info de cuenta get 2');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Respondiendo solicitudes------------------------------------------------------------------------------------------------

expressServer.get('/solicitud', (req, res) => {
    //console.log(res.status);
    //res.send('Solicitud que de path "/solicitud" recibida')//-Solo se puede mandar una sola respuesta

    res.status(401).send({//res.status para asignar un código de estatus y .send en este caso se agregó un objeto que puede ser puesto en el front mediante fetch o similares;
        errorMessage: 'No autorizado'
    });
    //console.log(res.status);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Parsear el body------------------------------------------------------------------------------------------------
//"Parsear" el body en el contexto de Express se refiere al proceso de extraer y transformar los datos contenidos en el cuerpo (body) de una solicitud HTTP entrante en un formato utilizable para tu aplicación.
//Cuando un cliente realiza una solicitud HTTP con un método como POST o PUT y envía datos en el cuerpo de la solicitud, esos datos pueden estar en diferentes formatos, como JSON, formularios URL-encoded, texto sin formato, entre otros.
//Para que tu aplicación pueda trabajar con estos datos, es necesario parsear (analizar) el cuerpo de la solicitud y convertirlo a un formato que puedas utilizar fácilmente en tu código. En Express, esto se logra utilizando middlewares.




//// Concepto middleware------------------------------------------------
//Son funciones que se ejecutan de forma previa al endpoint y puede servir para multiples endpoints

expressServer.use(express.json());
expressServer.use(express.text());

expressServer.get('/ejeplo-body', (req, res) => {
    console.log(req.body);
    //res.status(200).send('ejeplo-body');
    res.status(200).json({ error: 'usuario no encontrado' });
});