import Router from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { EndSessionController } from "../../../../modules/accounts/useCases/endSession/EndSessionController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const endSessionController = new EndSessionController();

authenticateRoutes.post("/", authenticateUserController.handle);
authenticateRoutes.delete("/:id", endSessionController.handle);

export { authenticateRoutes };
