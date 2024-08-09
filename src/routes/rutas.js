// // POST /tasks: Añadir una nueva tarea.
// // ○ GET /tasks: Obtener todas las tareas.
// // ○ GET /task/:id: Obtener una tarea específica por su ID.
// // ○ PUT /task/:id: Actualizar una tarea específica por su ID.
// // ○ DELETE /task/:id: Eliminar una tarea específica por su ID.

import express from "express"
const routes = express.Router()
import { anadirTareas, obtenerTareas, actualizarTarea, obtenerTareasPorId, eliminarTareaporId } from '../controllers/controlador.js'




routes.get('/tasks/', obtenerTareas);
routes.get('/tasks/:id/', obtenerTareasPorId);
routes.put('/tasks/:id', actualizarTarea);
routes.post('/tasks/', anadirTareas);
routes.delete('/tasks/:id', eliminarTareaporId);



export default routes;


