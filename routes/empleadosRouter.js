const express = require("express")
const router = express.Router()

const { traerEmpleados, traerEmpleado, crearEmpleado, actualizarEmpleado, borrarEmpleado } = require("../controllers/empleadosControllers.js")

router.get("/", traerEmpleados) // 
router.get("/:empleadoId", traerEmpleado) // 
router.post("/", crearEmpleado) // 
router.put("/:empleadoId", actualizarEmpleado) // 
router.delete("/:empleadoId", borrarEmpleado) //

module.exports = router
