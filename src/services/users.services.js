const Users = require("../models/users.models");
const Todos = require("../models/todos.models");
const Category = require("../models/category.models");

class UserServices{
    static async create(newUser){
        try {
            const createUser = await Users.create(newUser);
            return createUser
        } catch (error) {
            throw error;
        }
    }

    static async getAll (){
        try{
            const result = await Users.findAll();
            return result;

        }catch(error){
            throw error
        }
    }
    
    static async getTodosAndCategories(id) {
        try {
          const result = await Users.findByPk(id, {
            attributes:  ["userName"] ,
            include: [
                
              {
                model: Todos,
                attributes: ["title"],
                include:{
                    model: Category,
                    attributes:["name"]
                }
              }
            ],
          });
          return result;
        } catch (error) {
          throw error;
        }
      }
}


module.exports = UserServices;