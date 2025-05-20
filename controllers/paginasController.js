import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";

const paginaInicio = async (req, res) => {
    const promises = []; // Array para almacenar las promesas de consultas a la base de datos

    // Agrega la consulta para obtener los primeros 3 viajes
    promises.push(Viaje.findAll({ 
        limit: 3 
    }));

    // Agrega la consulta para obtener los primeros 3 testimoniales
    promises.push(Testimonial.findAll({ 
        limit: 3 
    }));

    try {
        // Ejecuta todas las promesas en paralelo y espera sus resultados
        const resultado = await Promise.all(promises);

        console.log(resultado[0]); // Muestra en consola los viajes obtenidos

        // Renderiza la vista 'inicio' con los datos obtenidos y variables adicionales
        res.render('inicio', {
            viajes: resultado[0], // Viajes obtenidos
            testimoniales: resultado[1], // Testimoniales obtenidos
            clase: 'home', // Clase para el CSS
            page: 'Inicio' // Titulo de la pagina
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

// Controlador para la pagina de nosotros
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros' // Titulo de la pagina
    });
}

// Controlador para renderizar pagina de viajes con todos los registros
const paginaViajes = async (req, res) => {
    // Obtener los viajes de la base de datos
    const viajes = await Viaje.findAll();

    // Renderizar la vista 'viajes' con los datos obtenidos
    res.render('viajes', {
        pagina: 'Proximos Viajes', // Titulo de la pagina
        viajes // Viajes obtenidos
    });
}

// Controlador para mostra todos los testimoniales
const paginaTestimoniales = async (req, res) => {
    try {
        // Obtener todos los testimoniales de la base de datos
        const testimoniales = await Testimonial.findAll();

        // Renderizar la vista 'testimoniales' con los datos obtenidos
        res.render('testimoniales', {
            testimoniales, // Testimoniales obtenidos
            pagina: 'Testimoniales' // Titulo de la pagina
        });
    }
    catch (error) {
        console.error('Error al obtener testimoniales:', error);
    }
}

// Controlador para renderizar la pagina de detalles de un viaje
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params; // Obtener el slug del viaje desde la URL

    try {
        // Buscar el viaje en la base de datos por su slug
        const viaje = await Viaje.findOne({ where: { slug } });

        // Renderizar la vista 'viaje' con los datos del viaje encontrado
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje // Viaje encontrado
        });
    } catch (error) {
        console.error('Error al obtener el viaje:', error);
    }
}

// Exportar los controladores para ser utilizados en otras partes de la aplicación
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}