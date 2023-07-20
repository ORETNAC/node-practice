console.clear(); //Nodemon Cleanse
import dotenv from "dotenv"; //Import enviroment
dotenv.config({ path: "./.env" });
const appPORT = process.env.PORT || 3000;

import express from "express"; //Import express
const expressApp = express();

expressApp.listen(appPORT, () => {//Definiendo el puerto
    console.log(`It's up on PORT ${appPORT}`);
})

import cookieParser from "cookie-parser"; //npm install cookie-parser
expressApp.use(cookieParser());// Necesario para leer las cookies
expressApp.use(express.json());// Sin esto no funcionan los POST
expressApp.use(express.text());// Sin esto no funcionan los POST

import accountRouter from "./routes/account.js";
expressApp.use("/account", accountRouter);//en el string se define el nivel del router, si no se pone nada queda a nivel root

import authRouter from "./routes/auth.js";
expressApp.use("/auth", authRouter);



import authSessionRouter from "./routes/auth_session.js";
expressApp.use("/auth-session", authSessionRouter);

import authTokenRouter from "./routes/auth_token.js";
expressApp.use("/auth-token", authTokenRouter);