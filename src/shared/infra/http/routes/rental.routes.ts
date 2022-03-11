import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRouters = Router();
const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();

rentalRouters.post("/", ensureAuthenticated, createRentalController.handle);
rentalRouters.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

export { rentalRouters };
