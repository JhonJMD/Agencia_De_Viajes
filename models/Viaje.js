import Sequelizer from "sequelizer";
import db from "../config/db.js";

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelizer.STRING
    },
    precio: {
        type: Sequelizer.STRING
    },
    fecha_ida: {
        type: Sequelizer.DATE
    },
    fecha_vuelta: {
        type: Sequelizer.DATE
    },
    imagen: {
        type: Sequelizer.STRING
    },
    descripcion: {
        type: Sequelizer.STRING
    },
    disponible: {
        type: Sequelizer.STRING
    },
    slug: {
        type: Sequelizer.STRING
    }
})