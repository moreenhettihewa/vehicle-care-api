const VehicleService = require("../services/vehicle.service");

class VehicleController {
    
    async createVehicle(req, res) {
        try {
            const vehicle = await VehicleService.createVehicle(req.body);
            res.status(201).json(vehicle);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async getVehicles(req, res) {
        try {
          const vehicles = await VehicleService.getAllVehicles();
          res.json(vehicles);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      async getVehicle(req, res) {
        try {
          const vehicle = await VehicleService.getVehicleById(req.params.id);
          if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
          res.json(vehicle);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

}

module.exports = new VehicleController();