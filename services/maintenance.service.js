const { Maintenance} = require ("../models");

class MaintenanceService {
  async createMaintenance(data) {
    return await Maintenance.create(data);
  }

  async getAllMaintenances() {
    return await Maintenance.findAll();
  }

  async getMaintenanceById(id) {
    return await Maintenance.findByPk(id);
  }
}

module.exports = new MaintenanceService();