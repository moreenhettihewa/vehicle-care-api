const MaintenanceService = require("../services/maintenance.service");

class MaintenanceController {

    async createMaintenance(req, res) {
        try {
            const maintenance = await MaintenanceService.createMaintenance(req.body);
            res.status(201).json(maintenance);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getMaintenances(req, res) {
        try {
            const maintenances = await MaintenanceService.getAllMaintenances();
            res.json(maintenances);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getMaintenance(req, res) {
        try {
            const maintenance = await MaintenanceService.getMaintenanceById(req.params.id);
            if (!maintenance) return res.status(404).json({ message: "Maintenance not found" });
            res.json(maintenance);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
}

module.exports = new MaintenanceController();