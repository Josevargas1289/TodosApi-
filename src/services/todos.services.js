const Todos = require("../models/todos.models");
const Users = require("../models/users.models");
const Category = require("../models/category.models")


class TodosServices {

  

    static async create(NewTodo){
        try {
            const createTodo = await Todos.create(NewTodo)
            return createTodo;
        } catch (error) {
            throw error;
        }
    }
     static async getAll(){
        try {
            const todos = await Todos.findAll()
            return todos;
        } catch (error) {
            throw error;
        }
     }



     static async updated(data, id) {
        try {
          const todoUpdate = await Todos.update(data, {
            where: { id },
          });
          return todoUpdate;
        } catch (error) {
          throw error;
        }
      }


      static async delete(id){
        try {
            const result = await Todos.destroy({
                where: {id}
            })
            return result;
        } catch (error) {
            throw error
        }
      }

    

}


module.exports = TodosServices;