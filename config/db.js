import Sequelizer from "sequelizer";

const db = new Sequelizer('agenciaviajes', 'root', '1607', {
    host: 'localhost',
    port: 3406,
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