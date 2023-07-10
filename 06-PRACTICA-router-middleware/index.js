console.clear();
import dotenv from "dotenv";
dotenv.config({ path: './.env' });
const appPORT = process.env.PORT || 3000;


import express from "express";
const expressApp = express();


import accountRouter from "./routes/account.js";


expressApp.listen(appPORT, () => {
    console.log(`IT'S UP ON PORT ${appPORT}`);
})

expressApp.use(express.json());
expressApp.use(express.text());
//////////////////////////////////////////////////////////////////
expressApp.use("/account",accountRouter);//en el string se define el nivel del router, si no se pone nada queda a nivel root

expressApp.use('/testRouter',(req,res)=>{ 
    res.send('El middleware del router no muestra la Ip')
});

//----------------------------------------------------------------------------------------------------------/
//Middlewares




