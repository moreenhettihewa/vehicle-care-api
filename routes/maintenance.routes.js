const express = require("express");
const MaintenanceController = require("../controllers/maintenance.controller");

const maintenanceRouter = express.Router();

maintenanceRouter.post("/", MaintenanceController.createMaintenance);
maintenanceRouter.get("/", MaintenanceController.getMaintenances);
maintenanceRouter.get("/:id", MaintenanceController.getMaintenance);

module.exports = maintenanceRouter;