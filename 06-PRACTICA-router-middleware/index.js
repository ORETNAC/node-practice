console.clear();

import dotenv from "dotenv";
dotenv.config({ path: './.env' });
const appPORT = process.env.PORT || 3000;


import express from "express";
const expressApp = express();


expressApp.listen(appPORT, () => {
    console.log(`IT'S UP ON PORT ${appPORT}`);
})

expressApp.use(express.json());
expressApp.use(express.text());


//----------------------------------------------------------------------------------------------------------/
//Obtener los detalles de una cuenta a partir del GUID
import { USERS_BBDD } from "./bbdd.js";

expressApp.get('/account/:guid', (req, res) => {
    const { guid } = req.params;
    const user = USERS_BBDD.find(user => user.guid === guid);


    if (!user) {
        res.status(404).send('Warning: Usuario no encontrado send');
    } else { //Este else no es necesario puesto que en el momento que se llega a un res.send() las demás lineas de código no serán ejecutadas
        console.log('Usuario encontrado');
        res.send(user);
    }

});

//Crear una nueva cuenta
expressApp.post('/account', (req, res) => {
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
expressApp.patch('/account/:guid', (req, res) => {
    const { guid } = req.params;
    const { name } = req.body;


    if (!name) return res.status(400).send('No envió el nombre');
    const user = USERS_BBDD.find(user => user.guid === guid);

    if (!user) return res.status(404).send('Usuario no encontrado');

    user.name = name;
    return res.send('Nombre cambiado');
});

//Eliminar una cuenta
expressApp.delete('/account/:guid', (req, res) => {

    const { guid } = req.params;
    const userIndex = USERS_BBDD.findIndex(user => user.guid === guid);

    if (userIndex === -1) res.status(404).send('No se puede eliminar un usuario inexistente');

    USERS_BBDD.splice(userIndex, 1);

    res.send('Usuario Eliminado');

});

