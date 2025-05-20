import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {
    // Validar los datos del formulario
    const { nombre, correo, mensaje } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({ mensaje: 'Agrega tu nombre' });
    }
    if (!correo) {
        errores.push({ mensaje: 'Tu Correo es Obligatorio' });
    }
    if (!mensaje) {
        errores.push({ mensaje: 'Agrega tu mensaje' });
    }

    // Si hay errores, volver a mostrar el formulario
    if (errores.length > 0) {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Guardar el testimonio en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.error('Error al guardar el testimonio:', error);
        }
    }
}

// Exportar el controlador para usarlo en las rutas
export {
    guardarTestimonial
}