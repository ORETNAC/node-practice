import { Router } from "express";
const authSessionRouter = Router();
import authByEmailPwd from '../helpers/auth-by-email-pwd.js'
import { nanoid } from "nanoid";
import { USERS_BBDD } from "../bbdd.js";
const sessions = [];// Para esta practica se utilizará espacio en memoria para guardar los ID validos para los usuarios, en el futuro se hará en una base de datos.

authSessionRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(401).send('Falta body');
    try {
        const { guid } = authByEmailPwd(email, password);
        const sessionId = nanoid();//Creación de ID único.
        sessions.push({ sessionId, guid });//Se agrega el ID creado para este usuario a la "base de datos" de ids admitidos y se junta con el usuario.
        console.log(sessions);
        res.cookie('sessionId', sessionId, {
            httpOnly: true,
        })
        return res.send('Send de cookie');
    } catch (error) {
        console.log(''+ error);
        return res.status(401).send('No autorizado');
    }



})

authSessionRouter.get('/profile', (req, res) => {
    const { cookies } = req;
    if (!cookies.sessionId) return res.status(401).send('No cookie?');
    const userSession = sessions.find(session => session.sessionId === cookies.sessionId)
    if (!userSession) return res.status(404).send('user session failed');
    const user = USERS_BBDD.find(user => user.guid === userSession.guid);
    if (!user) return res.status(404).send('user failed');
    delete user.password;
    return res.send(user);
})


export default authSessionRouter;