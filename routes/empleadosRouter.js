const express = require("express")
const router = express.Router()

const { traerEmpleados, traerEmpleado, crearEmpleado, actualizarEmpleado, borrarEmpleado } = require("../controllers/empleadosControllers.js")

router.get("/", traerEmpleados) // 
router.get("/:id", traerEmpleado) // 
router.post("/", crearEmpleado) // 
router.put("/:id", actualizarEmpleado) // 
router.delete("/:id", borrarEmpleado) //

module.exports = router
