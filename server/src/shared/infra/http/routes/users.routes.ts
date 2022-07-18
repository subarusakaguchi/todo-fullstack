import Router from "express";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { GetAllTasksController } from "../../../../modules/tasks/useCases/getAllTasks/GetAllTasksController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const getAllTasksController = new GetAllTasksController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, getAllTasksController.handle);

export { usersRoutes };
