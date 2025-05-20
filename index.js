// Importa el modulo de express, que es un framework para construit aplicaciones web en Node.js
import express from 'express';

import router from './routes/index.js';

// Configuramos la Base de datos
import db from './config/db.js';

//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// Crea una instancia de ina aplicacion Express
const app = express();

// Define el puerto en el que el servidor escuchara
// Usa el valor definido en la variable de entorno PORT, o el puerto 3000 por defecto si no definida
const port = process.env.PORT || 3000;

app.use('/', router);

// Definir la carpeta publica 
app.use(express.static('public'));

// Inicia el servidor para que escuche en el puerto especificado
app.listen(port, () => {
    //Muestra un mensaje en la consola cuando el servidor ha iniciado correctamente
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});

app.get('/', (req, res) => {
    res.send('!Bienvenido aa la pagina principal!');    
});

// Ruta 1: res.send Respuesta directa del texto 
app.get('/send', (req, res) => {
    res.send('Hola desde res.send');    
});

// Ruta 2: res.json Envio de datos JSON
app.get('/json', (req, res) => {
    res.json({mensaje: 'Hola en formato JSON', usuario: 'Jhon Jairo', activo: true});    
});

// Ruta 3: res.redirect Redireccionamiento 
app.get('/redirect', (req, res) => {
    res.redirect('/json');    
});

// Ruta 4: res.render Renderizar vista con datos
app.get('/vista', (req, res) => {
    res.render('index', { titulo: 'Hola desde EJS', usuario: 'Jhon'});    
});

// Ruta 5: req.query Obtener paramentros de consuta (URL)
app.get('/buscar', (req, res) => {
    const {nombre, edad} = req.query;
    res.send(`Parametros recibidos: nombre ${nombre}, edad ${edad}`);    
});

// Ruta 6: req.params Obtener parametros en la ruta
app.get('/usuarios/:id', (req, res) => {
    const {id} = req.params;
    res.send(`ID de usuario recibido: ${id}`);    
});

// Habilitar PUG
app.set('view engine', 'pug');

app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
})

app.get('/', (req, res) => {
    res.send('!Bienvenido a la pagina principal!');
});