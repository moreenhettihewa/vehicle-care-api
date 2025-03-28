const express = require("express");
const VehicleController = require("../controllers/vehicle.controller");

const vehicleRouter = express.Router();

vehicleRouter.post("/", VehicleController.createVehicle);
vehicleRouter.get("/", VehicleController.getVehicles);
vehicleRouter.get("/:id", VehicleController.getVehicle);

module.exports = vehicleRouter;