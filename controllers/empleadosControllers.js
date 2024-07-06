const empleadosModel = require("../models/empleadosModel.js")

// FUNCION QUE TRAE TODOS LOS EMPLEADOS
// READ - GET
const traerEmpleados = async (req, res) => {
    try {
        const empleado = await empleadosModel.findAll()
        res.json(empleado)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// FUNCION QUE TRAE UN EMPLEADO
// READ - GET
const traerEmpleado = async (req, res) => {
    try {
        const empleado = await empleadosModel.findByPk(req.params.empleadoId)
        res.json(empleado)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// FUNCION QUE CREA UN EMPLEADO
// CREATE - POST
const crearEmpleado = async (req, res) => {
    try {
        await empleadosModel.create(req.body)
        res.json({ "message": "Registro creado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// FUNCION QUE ACTUALIZA UN REGISTRO
// UPDATE - PUT
const actualizarEmpleado = async (req, res) => {
    try {
        await empleadosModel.update(req.body, {
            where: { empleadoId: req.params.empleadoId }
        })
        res.json({ "message": "Registro actualizado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// FUNCION QUE BORRA UN REGISTRO
// DELETE - DELETE
const borrarEmpleado = async (req, res) => {
    try {
        await empleadosModel.destroy({
            where: { empleadoId: req.params.empleadoId }
        })
        res.json({ "message": `Se borró el registro ${req.params.empleadoId}` })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { traerEmpleados, traerEmpleado, crearEmpleado, actualizarEmpleado, borrarEmpleado }
