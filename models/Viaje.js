import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define('viajes', {
    titulo: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    fecha_ida: {
        type: DataTypes.DATE
    },
    fecha_vuelta: {
        type: DataTypes.DATE
    },
    imagen: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    }
});