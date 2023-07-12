import { Router } from "express";
import { USERS_BBDD } from "../bbdd.js";

const authRouter = Router();

//EndPoint Public, no autorizado ni autenticado.
authRouter.get("/public", (req, res) => {
    res.send('EndPoint Publico')
});

//EndPoint Autenticado
authRouter.post("/autentical/", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Mala peticion');

    const user = USERS_BBDD.find(user => user.email == email);
    if (!user) return res.status(401).send('No estás autenticado');

    if (user.password !== password) return res.status(401).send('No estás autenticado');

    return res.send(`Usuario ${user.name} está autenticado`);
})

//EndPoint Autorizado
import  authByEmailPwd   from "../helpers/auth-by-email-pwd.js";

authRouter.post('/autorized',(req,res)=>{
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Mala peticion');

    try {
        const user = authByEmailPwd(email,password); //Esto puede dar error así que por eso try and catch
        if (user.role!=='admin') return res.status(403).send('No estás autorizado');
        return res.send('Admin autorizado');

    } catch (error) {
        //console.log(user);
        return res.status(401).send()
    }

})

export default authRouter;