const express = require("express")
const morgan = require('morgan')
const  routes  = require("./routes/rutas")

const app = express();
const PORT = 3000

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))


//rutas

app.use(routes)


app.listen(PORT, () => {
    console.log("Se inicio el servidor en el puerto 3000")
})