const db = require("../data/db.js")

const { DataTypes } = require("sequelize")

const empleadosModel = db.define("empleados", {
    empleadoId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    fechaNacimiento: { type: DataTypes.DATE },
    email: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    departamentoId: { type: DataTypes.STRING },
    titulo: { type: DataTypes.STRING },
    fechaContratacion: { type: DataTypes.DATE },
    sueldo: { type: DataTypes.DECIMAL },
})

module.exports = empleadosModel
