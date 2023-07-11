import { USERS_BBDD } from "../bbdd.js";

const authByEmailPwd = (email, password) =>{
    const user = USERS_BBDD.find(user => user.email === email);
    console.log(email);
    console.log('usuario: '+user);
    if (!user) throw new Error();

    if (user.password !== password) throw new Error();
    
    return user;
}

export default authByEmailPwd;