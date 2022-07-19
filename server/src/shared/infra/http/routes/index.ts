import Router from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { tasksRoutes } from "./tasks.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/session", authenticateRoutes);
routes.use("/tasks", tasksRoutes);
routes.use("/users", usersRoutes);

export { routes };
