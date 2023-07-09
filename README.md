# node-practice

José David Cantero Carreño

## Comandos recurrentes

A continuación, se presentan los comandos utilizados en el proyecto y una breve descripción de cada uno.

### `npm init --y`

Sirve inicializar un nuevo proyecto de npm en un directorio. La opción `--y` o `--yes` indica que se deben utilizar los valores predeterminados para todas las configuraciones y crear el archivo `package.json` sin preguntarme. útil para comenzar con un nuevo proyecto.

### `npm i -E -D nodemon` // `"dev": "nodemon ./index.js"`

instala el paquete `nodemon` al proyecto. `nodemon` es una herramienta que reinicia automáticamente la aplicación Node.js cuando detecta cambios en los archivos. La opción `-E` o `--save-exact` guarda la versión exacta del paquete en el archivo `package.json`. La opción `-D` o `--save-dev` indica que `nodemon` es una dependencia de desarrollo, lo que significa que se utiliza durante el desarrollo de la aplicación pero no es necesario para la ejecución en producción. La línea `"dev": "nodemon ./index.js"` en el archivo `package.json` configura el comando `npm run dev` para ejecutar la aplicación con `nodemon`.

### `npm i jsonwebtoken`

Este comando instala el paquete `jsonwebtoken` en el proyecto. `jsonwebtoken` es una biblioteca de Node.js que se utiliza para trabajar con JSON Web Tokens (JWT), que son tokens utilizados para la autenticación y autorización en aplicaciones web.

### `npm i -E express`

Este comando instala el paquete `express` al proyecto. `express` es un framework de Node.js utilizado para construir aplicaciones web y APIs. Es una herramienta muy popular y poderosa que simplifica el manejo de rutas, solicitudes y respuestas HTTP, y proporciona una arquitectura flexible para desarrollar aplicaciones web.

#### Ejemplo
```javascript 
import express from 'express';
const expressServer = express();
expressServer.use(express.json()); // Este middleware es utilizado para analizar el cuerpo de las solicitudes entrantes en formato JSON. Al llamar a expressServer.use() y pasar express.json(), estás indicando que deseas utilizar este middleware en todas las solicitudes entrantes para analizar el cuerpo JSON y convertirlo en un objeto JavaScript accesible a través de req.body.
expressServer.use(express.text());// Lo mismo pero en formato text
```
### `npm i dotenv`

Este comando instala el paquete `dotenv` en el proyecto. `dotenv` es una biblioteca que te permite cargar variables de entorno desde un archivo `.env` en la aplicación Node.js. es útil para mantener información sensible, como credenciales de API, en un archivo separado y no hacerlas visibles en el código fuente.

#### Ejemplos

```javascript
import dotenv from "dotenv";
dotenv.config({path:'./.env'});
const appPORT = process.env.PORT || 3000; // Verifica si existe var PORT en .env y si no le asigna 3000;
```



## Node Docs
https://nodejs.org/dist/latest-v18.x/docs/api/esm.html

## Express Docs
https://expressjs.com/es/4x/api.html#req.params
