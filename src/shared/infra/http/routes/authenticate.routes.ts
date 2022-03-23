import { Router } from "express";
import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserContoller";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";

const authenticateRouters = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRouters.post("/sessions", authenticateUserController.handle);
authenticateRouters.post("/refresh-token", refreshTokenController.handle);

export { authenticateRouters };
