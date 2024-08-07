const dataBase = require("../db/dataBase.js"); //  Importación módulo de conexión



//Obtener todas las tareas
const obtenerTareas = async (req, res) => {
    try {
        const connection = await dataBase();
        const [tasks] = await connection.query('SELECT * FROM tasks');
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

// //Obtener por id
const obtenerTareasPorId = async (req, res) => {
    try {
        const connection = await dataBase()
        const id = req.params.id
        const results = await connection.query("SELECT * FROM tasks WHERE id=?", id)
        res.status(200).json(results[0])

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
};

// //crear nueva tarea
const anadirTareas = async (req, res) => {
    try {
        const connection = await dataBase()
        const { title, description, isComplete } = req.body
        connection.query("INSERT INTO tasks (title, description, isComplete) values (?,?,?)", [title, description, isComplete])
        res.status(200).json({ message: "se ha agregado correctamente" })
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
}

// actualizar 
const actualizarTareaId = async (req, res) => {
    try {
        const connection = await dataBase()
        const { title, description, isComplete } = req.body
        const id = req.params.id
        const result = await connection.query("UPDATE tasks SET title = ? , description = ?, isComplete = ? WHERE id = ?", [title, description, isComplete, id])
        res.send("se ha actualizado una tarea")
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
}

//Eliminar tarea 
const eliminarTareaporId = async (req, res) => {
    try {
        const connection = await dataBase()
        const id = req.params.id
        const results = await connection.query("DELETE FROM tasks WHERE id=?", id)
        res.send("se ha eliminado una tarea")
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
}


module.exports = { anadirTareas, obtenerTareas, obtenerTareasPorId, actualizarTareaId, eliminarTareaporId }
