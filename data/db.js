const { Sequelize } = require("sequelize")

// nombre de la base datos - user - contraseña - { donde esta alojada tu bd?, lenguaje, puerto }

const db = new Sequelize("leom_empresa_db", "leom", "grupo25api", {
    host: "mysql-leom.alwaysdata.net",
    dialect: "mysql",
    port: 3306
})

module.exports = db
