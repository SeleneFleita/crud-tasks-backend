// POST /tasks: Añadir una nueva tarea.
// ○ GET /tasks: Obtener todas las tareas.
// ○ GET /task/:id: Obtener una tarea específica por su ID.
// ○ PUT /task/:id: Actualizar una tarea específica por su ID.
// ○ DELETE /task/:id: Eliminar una tarea específica por su ID.

const express = require('express');
const rutas = express.Router(); 
const {
    anadirTareas,
    obtenerTareas,
    obtenerTareasPorId,
    actualizarTareaId,
    eliminarTareaporId
  } = require('../controllers/controlador');
  
  router.get('/tasks',  obtenerTareas); 
  router.get('/tasks/:id', obtenerTareasPorId); 
  router.put('/tasks/:id',actualizarTareaId); 
  router.post('/tasks', anadirTareas); 
  router.delete('/tasks/:id',  eliminarTareaporId);

  module.exports= {rutas}
