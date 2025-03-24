const { User } = require("../models");

class UserService {
    async createUser(data) {
        return await User.create(data);
    }

    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(id) {
        return await User.findByPk(id);
    }
}

module.exports = new UserService();