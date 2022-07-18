import Router from "express";

import { CreateTaskController } from "../../../../modules/tasks/useCases/createTask/CreateTaskController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();

tasksRoutes.post("/", ensureAuthenticated, createTaskController.handle);

export { tasksRoutes };
