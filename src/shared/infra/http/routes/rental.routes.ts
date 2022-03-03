import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRouters = Router();
const createRentalController = new CreateRentalController();

rentalRouters.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalRouters };
