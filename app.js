const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3000
const {rutas} = require( "./routes/rutas")
const { connection } = require("../src/db/dataBase")

 
app.use(express.json)
app.use(morgan('dev'))

app.listen(PORT, () =>{
    console.log("Se inicio el servidor en el puerto 3000")
})

module.exports={app}
