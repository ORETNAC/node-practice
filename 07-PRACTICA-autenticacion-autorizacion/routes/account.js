import {Router}  from "express";

const accountRouter = Router();



//Los middlewares se suelen ejecutar antes que el endpoint en si
accountRouter.use((req,res,next)=>{//Un middeware que solo hace un pequeño log de la IP
    console.log(req.ip);
    next();
});


//Obtener los detalles de una cuenta a partir del GUID
import { USERS_BBDD } from "../bbdd.js"; // Importante al momento de hacer el router pasar la base de datos del index a aca.

accountRouter.get('/:guid', (req, res) => {
    const { guid } = req.params;
    const user = USERS_BBDD.find(user => user.guid === guid);


    if (!user) {
        return res.status(404).send('Warning: Usuario no encontrado');
    } else { //Este else no es necesario puesto que en el momento que se llega a un res.send() las demás lineas de código no serán ejecutadas
        console.log('Usuario encontrado');
        return res.send(user);
    }

});

//Crear una nueva cuenta
accountRouter.post('/', (req, res) => {
    const { guid, name } = req.body;


    if (!name || !guid) return res.status(400).send('Faltan datos');

    const user = USERS_BBDD.find(user => user.guid === guid);
    if (user) return res.status(409).send('Usuario ya existe');

    USERS_BBDD.push({
        guid,
        name,
    });
    return res.send('Usuario agregado');
});

//Actualizar Nombre de un usuario
accountRouter.patch('/:guid', (req, res) => {
    const { guid } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).send('No envió el nombre');

    const user = USERS_BBDD.find(user => user.guid === guid);
    if (!user) return res.status(404).send('Usuario no encontrado');

    user.name = name;
    return res.send('Nombre cambiado');
});

//Eliminar una cuenta
accountRouter.delete('/:guid', (req, res) => {

    const { guid } = req.params;
    if (!guid) return res.status(400).send('Falta el GUID para la eliminación');
    const userIndex = USERS_BBDD.findIndex(user => user.guid === guid);

    if (userIndex === -1) res.status(404).send('No se puede eliminar un usuario inexistente');

    USERS_BBDD.splice(userIndex, 1);

    res.send('Usuario Eliminado');

});

export default accountRouter;