import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAllTasksUseCase } from "./GetAllTasksUseCase";

class GetAllTasksController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const getAllTasksUseCase = container.resolve(GetAllTasksUseCase);

    const userWithTasks = await getAllTasksUseCase.execute(id);

    return res.json(userWithTasks);
  }
}

export { GetAllTasksController };
