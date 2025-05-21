import { Sequelize } from "sequelize";

const db = new Sequelize('agenciaviajes_hardstory', 'agenciaviajes_hardstory', '17511fe03cbf649825942ce4b89c59f6526604b3', {
    host: '39nsb.h.filess.io',
    port: 3307,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;