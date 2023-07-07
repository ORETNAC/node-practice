console.clear();
import createExpressServer from 'express';

const PORT=3000;
const expressServer = createExpressServer();

expressServer.listen(PORT,()=>{//Un listener de cuando se acceda a el puerto especificado
    console.log(`Servidor levantado en el puerto ${PORT}`)
});

/////////////////////////////////////////////////////////////////////////////////////

// expressServer.get('/mi-cuenta',(req,res)=>{ // Se está filtrando para qué caso [URL] se va a filtrar esa función que se pasa como segundo parametro, por lo tanto la respuesta solo se dará para la ruta '/mi-cuenta' y si es un GET.
//     res.send('Tu Cuenta personal');
// });

expressServer.post('/mi-cuenta', (req,res)=>{ // De esta manera se consiguen 2 funciones separadas, una para el get y otra para el put ambas correspondientes para el directorio '/mi-cuenta'
    res.send('Tus datos han sido agregados');
});
// /////////////////////////////////////////////////////////////////////////////////
// expressServer.all('/mi-cuenta',(req,res)=>{//Recibe todos los verbos o tipo de peticiones a la vez y realiza una función.
//     console.log('evento especial... medición de trafico por ejemplo...');
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////IMPORTANT 'params' property------------------------------------------------------------------------------------------------
expressServer.get('/mi-cuenta/:user/:password',(req,res)=>{//En ciertas ocaciones se requieren parametros en la ruta, por ejemplo identificadores de usuario, si ponemos solo '/mi-cuenta' no servirá de mucho porque es algo estatico, por lo tanto se utiliza ':idcuenta' para decirle a la función que todo lo que venga despues del : es lo que necesito como identificador
    //Cuidado con los caracteres especiales en las rutas con valor dinamico, contraseña da muchos problemas por la Ñ
    console.log(req.params);//
    res.send('info de cuenta');
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////'headers' property