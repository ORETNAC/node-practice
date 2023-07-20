import { USERS_BBDD } from "../bbdd.js";

const authByEmailPwd = (email, password) =>{
    const user = USERS_BBDD.find(user => user.email === email);
    if (!user) throw new Error('Usuario no encontrado');
    if (user.password !== password) throw new Error('Contraseña erronea');
    return user;
}

export default authByEmailPwd;