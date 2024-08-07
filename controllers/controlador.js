const connection = require("../src/db/dataBase"); //  Importar módulo de conexión

const { app } = require("../app") 
//Obtener todas las tareas
app.get('/tasks/',async (req, res) => {

    const connectionDB = await newConnection()

    const result = await connectionDB.query("SELECT * FROM tasks")

    res.json(result[0])

    connectionDB.end() 
})
//Obtener por id
app.get("/tasks/:id", async (req, res) => {
    const connectionDB = await connection()
    const id = req.params.id
    const results = await connectionDB.query("SELECT * FROM tasks WHERE id=?", id)
    res.status(200).json(results[0])
    connectionDB.end
})
//crear nueva tarea
app.post("/tasks", async (req, res) => {

    const connectionDB = await connection()
    const { title, description, isComplete } = req.body
    const id = tasks.length + 1
    connectionDB.query("INSERT INTO tasks (title, description, isComplete) values (?,?)", [title, description, isComplete])
    res.send("se ha agregado una nueva tarea")
    connectionDB.end
})
app.put("/tasks/:id", async (req, res) => {
    const connectionDB = await connection()
    const { title, description, isComplete } = req.body
    const id = requeresparams.id
    const result = await connectionDB.query("UPDATE tasks SET title =description, isCompleteibro = ? WHERE id = ?", [title, description, isComplete, id])
    res.send("se ha actualizado una tarea")
    res.status(200).json(result[0])
    connection.end
})

app.delete("/tasks/:id", async (req, res) => {
    const connectionDB = await connection()
    const id = req.params.id
    const results = await connectionDB.query("DELETE FROM tasks WHERE id=?", id)
    res.status(200).json(results[0])
    connectionDB.end
})

module.exports = {
    anadirTareas,
    obtenerTareas,
    obtenerTareasPorId,
    actualizarTareaId,
    eliminarTareaporId
  }
