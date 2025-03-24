const UserService = require("../services/user.service");

class UserController {
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).json(user);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async getUsers(req, res) {
        try {
          const users = await UserService.getAllUsers();
          res.json(users);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      async getUser(req, res) {
        try {
          const user = await UserService.getUserById(req.params.id);
          if (!user) return res.status(404).json({ message: "User not found" });
          res.json(user);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
}

module.exports = new UserController();