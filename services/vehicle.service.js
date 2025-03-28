const { Vehicle } = require("../models");

class VehicleService {
    async createVehicle(data) {
        return await Vehicle.create(data);
    }

    async getAllVehicles() {
        return await Vehicle.findAll();
    }

    async getVehicleById(id) {
        return await Vehicle.findByPk(id);
    }
}

module.exports = new VehicleService();