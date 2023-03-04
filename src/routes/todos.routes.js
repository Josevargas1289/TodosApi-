const { Router } = require("express");
const { createTodo, getAllTodos, updateTodo, deleteTodo } = require("../controllers/todos.controllers.js")


const router = Router()

router.post('/api/v1/todos',createTodo ); // crea todos
router.get('/api/v1/todos', getAllTodos); // consulta todos
router.put("/api/v1/todos/:id", updateTodo); // actyualiza las todos
router.delete("/api/v1/todos/:id",deleteTodo ) // elimina las todos



module.exports = router;
