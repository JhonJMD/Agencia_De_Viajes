import Sequelizer from "sequelizer";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelizer.STRING
    },
    correo: {
        type: Sequelizer.STRING
    },
    mensaje: {
        type: Sequelizer.STRING
    }
})