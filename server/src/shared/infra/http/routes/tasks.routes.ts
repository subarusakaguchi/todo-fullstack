import Router from "express";

import { CreateTaskController } from "../../../../modules/tasks/useCases/createTask/CreateTaskController";
import { DeleteTaskController } from "../../../../modules/tasks/useCases/deleteTask/DeleteTaskController";
import { GetAllTasksController } from "../../../../modules/tasks/useCases/getAllTasks/GetAllTasksController";
import { UpdateTaskController } from "../../../../modules/tasks/useCases/updateTask/UpdateTaskController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

const tasksRoutes = Router();

const createTaskController = new CreateTaskController();
const getAllTasksController = new GetAllTasksController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

tasksRoutes.post("/", ensureAuthenticated, createTaskController.handle);
tasksRoutes.get("/", ensureAuthenticated, getAllTasksController.handle);
tasksRoutes.patch("/:id", ensureAuthenticated, updateTaskController.handle);
tasksRoutes.delete("/:id", ensureAuthenticated, deleteTaskController.handle);

export { tasksRoutes };
