const { Router } = require("express")
const { createUser, getallUsers, getUserIdWithTodosWithCategories } = require("../controllers/users.controllers");


const router = Router()
router.post('/api/v1/users', createUser); // crea usuarios
router.get("/api/v1/users", getallUsers); // consulta los usuarios
router.get("/api/v1/users/:id/todos/categories", getUserIdWithTodosWithCategories)// trea el usuario por el di, todas sus tareas y las categorias





module.exports = router;