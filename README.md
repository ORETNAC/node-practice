# node-practice

José David Cantero Carreño

## Índice

  - [Comandos recurrentes](#comandos-recurrentes)
    - [`npm init --y`](#npm-init---y)
    - [`npm i -E -D nodemon`](#npm-i--e--d-nodemon--dev-nodemon-indexjs)
    - [`npm i -E express`](#npm-i--e-express)
    - [`npm i dotenv`](#npm-i-dotenv--npm-install-dotenv)
    - [`npm i nanoid`](#npm-i-nanoid)
    - [`npm i jsonwebtoken`](#npm-i-jsonwebtoken)
  - [Router en Express](#router-en-express)
  - [Middlewares en Express](#middlewares-en-express)
    - [Funcionalidades de los middlewares](#funcionalidades-de-los-middlewares)
    - [Cookies](#cookies)
    - [Definición de un middleware en Express](#definición-de-un-middleware-en-express)
## Comandos recurrentes

A continuación, se presentan los comandos utilizados en el proyecto y una breve descripción de cada uno.

### `npm init --y`

Sirve inicializar un nuevo proyecto de npm en un directorio. La opción `--y` o `--yes` indica que se deben utilizar los valores predeterminados para todas las configuraciones y crear el archivo `package.json` sin preguntarme. útil para comenzar con un nuevo proyecto.

### `npm i -E -D nodemon` // `"dev": "nodemon ./index.js"`

instala el paquete `nodemon` al proyecto. `nodemon` es una herramienta que reinicia automáticamente la aplicación Node.js cuando detecta cambios en los archivos. La opción `-E` o `--save-exact` guarda la versión exacta del paquete en el archivo `package.json`. La opción `-D` o `--save-dev` indica que `nodemon` es una dependencia de desarrollo, lo que significa que se utiliza durante el desarrollo de la aplicación pero no es necesario para la ejecución en producción. La línea `"dev": "nodemon ./index.js"` en el archivo `package.json` configura el comando `npm run dev` para ejecutar la aplicación con `nodemon`.


### `npm i -E express`

Este comando instala el paquete `express` al proyecto. `express` es un framework de Node.js utilizado para construir aplicaciones web y APIs. Es una herramienta muy popular y poderosa que simplifica el manejo de rutas, solicitudes y respuestas HTTP, y proporciona una arquitectura flexible para desarrollar aplicaciones web.

#### Ejemplo
```javascript 
import express from 'express';
const expressServer = express();
expressServer.use(express.json()); // Este middleware es utilizado para analizar el cuerpo de las solicitudes entrantes en formato JSON. Al llamar a expressServer.use() y pasar express.json(), estás indicando que deseas utilizar este middleware en todas las solicitudes entrantes para analizar el cuerpo JSON y convertirlo en un objeto JavaScript accesible a través de req.body.
expressServer.use(express.text());// Lo mismo pero en formato text




```

```javascript
expressApp.use('/testRouter',(req,res)=>{ 
    res.send('El middleware del router no muestra la Ip')
});
/// EndPoint para más información: #rounter-en-express
```
- [Router en Express](#router-en-express)

### `npm i dotenv` || `npm install dotenv`


Este comando instala el paquete `dotenv` en el proyecto. `dotenv` es una biblioteca que te permite cargar variables de entorno desde un archivo `.env` en la aplicación Node.js. es útil para mantener información sensible, como credenciales de API, en un archivo separado y no hacerlas visibles en el código fuente.

#### Ejemplos

```javascript
import dotenv from "dotenv";
dotenv.config({path:'./.env'});
const appPORT = process.env.PORT || 3000; // Verifica si existe var PORT en .env y si no le asigna 3000;
```
### `npm i nanoid`
es una herramienta sencilla y segura para generar identificadores únicos (IDs) aleatorios. Proporciona una alternativa a las bibliotecas más grandes y complejas como uuid o guid, y es especialmente útil cuando necesitas generar IDs cortos y únicos en aplicaciones web, bases de datos, APIs, entre otros casos de uso.

```javascript
const { nanoid } = require('nanoid');

const id = nanoid(); // Genera un ID único

console.log(id); // Muestra el ID generado

```
### `npm install cookie-parser`
El paquete cookie-parser es un middleware popular en Express que se utiliza para analizar y administrar cookies en las solicitudes HTTP.

1. Analiza las cookies: cookie-parser analiza automáticamente las cookies enviadas por el cliente en cada solicitud y las convierte en un objeto JavaScript. Esto facilita el acceso a los valores de las cookies en tu código.
2. Almacena las cookies: cookie-parser permite establecer cookies en la respuesta que se enviará al cliente. Puedes utilizar el método res.cookie para establecer cookies con nombre y valor en la respuesta.
3. Configura opciones de las cookies: cookie-parser ofrece opciones de configuración que puedes utilizar para personalizar el comportamiento de las cookies. Esto incluye opciones como la duración de la cookie, la ruta de la cookie, el dominio, la seguridad y más.
```javascript
import cookieParser from "cookie-parser"; //Index: npm install cookie-parser
expressApp.use(cookieParser());// Index: Necesario para leer las cookies

req.cookies

```
### `npm i jsonwebtoken`

Este comando instala el paquete `jsonwebtoken` en el proyecto. `jsonwebtoken` es una biblioteca de Node.js que se utiliza para trabajar con JSON Web Tokens (JWT), que son tokens utilizados para la autenticación y autorización en aplicaciones web.

## Router en Express
En Express, un router es una forma de organizar y estructurar las rutas y controladores de una aplicación web o API. Permite agrupar las rutas relacionadas en módulos separados, lo que facilita la modularidad y la escalabilidad del código.

Un router en Express actúa como un middleware y puede manejar solicitudes HTTP para rutas específicas. Puedes pensar en un router como un "mini-aplicación" dentro de tu aplicación principal de Express.

```javascript
import express  from "express"; //router
const accountRouter = express.Router();//router
export default accountRouter;//router
////////////////////////////////////////
expressApp.use("/account",accountRouter); //Index, especificar la ruta "/account aquí permite que los middlewares del router no tengan efecto sobre otros endpoints del index.
```
```javascript 
//EndPoint, escalable Ubicado en un router
accountRouter.patch('/:guid', (req, res) => {
    const { guid } = req.params;
    const { name } = req.body;
    if (!name) return res.status(400).send('No envió el nombre');

    const user = USERS_BBDD.find(user => user.guid === guid);
    if (!user) return res.status(404).send('Usuario no encontrado');

    user.name = name;
    return res.send('Nombre cambiado');
});
```

## Middlewares en Express

En Express, los middlewares son funciones que se ejecutan durante el procesamiento de una solicitud HTTP. Estas funciones tienen acceso al objeto `request` (req), al objeto `response` (res) y a la función `next()` que permite pasar el control al siguiente middleware en la cadena.

### Funcionalidades de los middlewares

Los middlewares en Express se utilizan para realizar una variedad de tareas, como:

1. **Procesamiento de datos**: Los middlewares pueden analizar y manipular los datos de la solicitud antes de que sean manejados por las rutas o controladores. Por ejemplo, se pueden realizar validaciones, autenticación, autorización, transformación de datos, entre otros.

2. **Manipulación de la respuesta**: Los middlewares también pueden modificar la respuesta antes de que se envíe al cliente. Pueden agregar encabezados personalizados, comprimir la respuesta, establecer cookies, entre otros.

3. **Gestión de errores**: Los middlewares pueden manejar errores y devolver respuestas de error adecuadas al cliente. Esto puede incluir el manejo de excepciones, validaciones fallidas u otras situaciones de error.

### Cookies
`res.cookie` puede ser útil para realizar tareas como mantener una sesión de usuario, recordar preferencias del usuario o almacenar información personalizada.

```javascript
res.cookie(nombre, valor, opciones);
 ```
**nombre**: Especifica el nombre de la cookie.
**valor**: Especifica el valor de la cookie.
**opciones (opcional)**: Un objeto que contiene opciones adicionales para configurar la cookie, como **maxAge** (tiempo de vida de la cookie), secure (indica si la cookie solo debe enviarse a través de conexiones seguras), **httpOnly** (indica si la cookie solo debe ser accesible desde el servidor y no desde el cliente), entre otras opciones.


### Definición de un middleware en Express

Un middleware en Express se define como una función que toma tres argumentos: `req`, `res` y `next`. `req` representa el objeto de solicitud, `res` representa el objeto de respuesta y `next` es una función que se llama para pasar el control al siguiente middleware en la cadena. hasta al finalizar llegar a los **EndPoints** en el Router para relizar su res.get/post/etc.

```javascript
const middlewareExample = (req, res, next) => {
  // Código del middleware aquí
  next(); // Llamada a next para pasar al siguiente middleware
};
