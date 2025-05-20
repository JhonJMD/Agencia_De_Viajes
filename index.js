// Importa el modulo de express, que es un framework para construit aplicaciones web en Node.js
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// Crea una instancia de la aplicación Express
const app = express();

// Definir puerto
const port = process.env.PORT || 3000;

// Habilitar PUG
app.set('view engine', 'pug');

// Añadir carpeta de vistas
app.set('views', './view');

// Middleware para obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});