const express = require("express")
const app = express()
const PORT = process.env.PORT || 3030
const cors = require("cors")
const empleadosRouter = require("./routes/empleadosRouter.js")
const db = require ("./data/db.js")

app.use(cors())
app.use(express.json()) // analiza y lo pone en formato req.body

app.get("/", (req, res) => {
    res.send(`
        <code>
            <h1>Empresa API</h1>
            <p>Agregar <strong>/empleados</strong> para ver todos los registros</p>
        </code>
    `)
}) // sin modularizar

app.use("/empleados", empleadosRouter) // modularizado (empleadosRouter.js)

// conexion a la base de datos
const conexiondb = async () => {
    try {
        await db.authenticate()
        console.log(`Conexion ok con la base de datos`);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

app.listen(PORT, () => {
    conexiondb()
    console.log(`Server ok en el puerto ${PORT}`)
})
