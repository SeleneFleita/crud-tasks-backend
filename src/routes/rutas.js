// // POST /tasks: Añadir una nueva tarea.
// // ○ GET /tasks: Obtener todas las tareas.
// // ○ GET /task/:id: Obtener una tarea específica por su ID.
// // ○ PUT /task/:id: Actualizar una tarea específica por su ID.
// // ○ DELETE /task/:id: Eliminar una tarea específica por su ID.

const routes = require("express").Router()
const { anadirTareas, obtenerTareas, obtenerTareasPorId, actualizarTareaId, eliminarTareaporId } = require("../controllers/controlador")

routes.get('/tasks/', obtenerTareas),
routes.get('/tasks/:id/', obtenerTareasPorId);
routes.put('/tasks/:id', actualizarTareaId);
routes.post('/tasks/', anadirTareas);
routes.delete('/tasks/:id', eliminarTareaporId);



module.exports = routes


