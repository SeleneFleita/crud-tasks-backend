import express from "express"
import morgan from 'morgan'
import routes from '../src/routes/rutas.js'

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