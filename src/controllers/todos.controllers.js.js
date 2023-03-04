const TodosServices = require("../services/todos.services");


const createTodo = async (req, res)=>{
    try {
        const NewTodo = req.body;
        const todo = await TodosServices.create(NewTodo)
        res.json(todo)
        
    } catch (error) {
        res.status(400).json(error);
    }
}

const getAllTodos = async (req, res)=>{
    try {
        const data = await TodosServices.getAll()
        res.json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await TodosServices.updated(data, id);
  
      res.status(200).json({
        status: "Succes",
        result,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        error,
      });
    }
  };

  const deleteTodo = async (req, res)=>{
    try {
        const { id } = req.params;
        const result = await TodosServices.delete(id);
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
    
    
    
    
  }

module.exports = {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
}