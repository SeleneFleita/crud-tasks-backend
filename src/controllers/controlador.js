import dataBase from "../db/dataBase.js"; //  Importación módulo de conexión



//Obtener todas las tareas
 export const obtenerTareas = async (req, res) => {
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
export const obtenerTareasPorId = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.status(400).json({ error: 'El ID es requerido' });
    }
    try {
        const connection = await dataBase()
        const results = await connection.query("SELECT * FROM tasks WHERE id=?", id)
        res.status(200).json(results[0])

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
};

// //crear nueva tarea
export const anadirTareas = async (req, res) => {
    try {
        const connection = await dataBase()
        const { title, description, isComplete } = req.body
        if (title.trim() === '' || title.length >= 225) {
            return res.status(400).json({ error: 'El titulo no puede estar vacio y debe ser menor a 255 caracteres' });
        }
        if (description.trim() === '') {
            return res.status(400).json({ error: 'La descripcion no debe estar vacia' });
        }
        if (isComplete != false && isComplete != true) {
            return res.status(400).json({ error: 'Ingrese un valor boolean en isComplete' })
        }
        connection.query("INSERT INTO tasks (title, description, isComplete) values (?,?,?)", [title, description, isComplete])
        res.status(201).json({ message: "se ha agregado correctamente" })
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
}

// actualizar 
export const actualizarTarea = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.status(400).json({ error: 'El Id es requerido para realizar una actualización' });
    }
    try {
        const connection = await dataBase()
        const [task] = await connection.query("SELECT * FROM tasks where id=?", [id])
        if (task.length === 0) {
            return res.status(404).json({ message: "el id solicitado no se encuentra en el sistema" })
        }
        const { title, description, isComplete } = req.body
        if (title.trim() === '' || title.length > 225) {
            return res.status(400).json({ error: 'El titulo no puede estar vacio y debe ser menor a 255 caracteres' });
        }
        if (description.trim() === '') {
            return res.status(400).json({ error: 'La descripcion no debe estar vacia' });
        }
        if (isComplete != false && isComplete != true) {
            return res.status(400).json({ error: 'Ingrese un valor boolean en isComplete' })
        }
        const result = await connection.query("UPDATE tasks SET title = ? , description = ?, isComplete = ? WHERE id = ?", [title, description, isComplete, id])
        res.status(201).json({ message: "se ha actualizado correctamente" })

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
}


//Eliminar tarea 
export const eliminarTareaporId = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.status(400).json({ error: 'El ID es requerido' });
    }

    try {
        const connection = await dataBase()
        const [task] = await connection.query("SELECT * FROM tasks where id=?", [id])
        if (task.length === 0) {
            return res.status(404).json({ message: "el id solicitado no se encuentra en el sistema" })
        }

        const results = await connection.query("DELETE FROM tasks WHERE id=?", id)
        res.send("se ha eliminado una tarea")
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' })
    }
}

export default { anadirTareas, obtenerTareas, actualizarTarea, obtenerTareasPorId, eliminarTareaporId }
