import { Router } from "express";
const authTokenRouter = Router();
import authByEmailPwd from "../helpers/auth-by-email-pwd.js";

authTokenRouter.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('Petición erronea');
    try {
        const user = authByEmailPwd(email, password);
        return res.send(`Usuario ${user.name} autenticado`);
    } catch (error) {
        return send.status(401);
    }
})


export default authTokenRouter;