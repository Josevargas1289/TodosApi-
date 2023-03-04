const UserServices = require("../services/users.services");

const createUser = async (req, res)=>{
    try {
        const newUser = req.body;
        const user = await UserServices.create(newUser);
        res.json(user)
        
    } catch (error) {
        res.status(400).json(error);
    }
}

const getallUsers = async (req, res) => {
    try {
      const user = await UserServices.getAll();
      res.status(200).json({
        status: "succes",
        user,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  };

  const getUserIdWithTodosWithCategories = async (req, res)=>{
    try {
      const { id } = req.params;
      const todosWithcategorie = await UserServices.getTodosAndCategories(id);
      res.json(todosWithcategorie)
    } catch (error) {
      res.status(400).json(error);
      
    }
    

  }

module.exports = {
    createUser,
    getallUsers,
    getUserIdWithTodosWithCategories,
}