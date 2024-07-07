const { Sequelize } = require("sequelize")
const mysql2 = require('mysql2');

// nombre de la base datos - user - contraseña - { donde esta alojada tu bd?, lenguaje, puerto }

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
    port: 3306
})

module.exports = db
