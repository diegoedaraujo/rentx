import { Router } from "express";
import { authenticateRouters } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { passwordRoutes } from "./password.routes";
import { rentalRouters } from "./rental.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRouters);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRouters);
router.use("/", passwordRoutes);
router.use(authenticateRouters);

export { router };
