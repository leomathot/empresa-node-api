const { Sequelize } = require("sequelize")

// nombre de la base datos - user - contraseña - { donde esta alojada tu bd?, lenguaje, puerto }

const db = new Sequelize("empresa", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

module.exports = db
