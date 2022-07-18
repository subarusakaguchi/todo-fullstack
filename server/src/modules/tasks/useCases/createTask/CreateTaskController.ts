import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const { id } = req.user;

    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    const newTask = await createTaskUseCase.execute({
      title,
      description,
      user_id: id,
    });

    return res.status(201).json(newTask);
  }
}

export { CreateTaskController };
