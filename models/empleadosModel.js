const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const empleadosModel = db.define("empleados", {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    departamentoId: { type: DataTypes.STRING },
    titulo: { type: DataTypes.STRING },
    fechaContratacion: { type: DataTypes.DATE },
    sueldo: { type: DataTypes.DECIMAL },
})

module.exports = empleadosModel
