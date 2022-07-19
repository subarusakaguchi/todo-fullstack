import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTaskUseCase } from "./UpdateTaskUseCase";

class UpdateTaskController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const updateTaskUseCase = container.resolve(UpdateTaskUseCase);

    await updateTaskUseCase.execute(id);

    return res.status(204).send();
  }
}

export { UpdateTaskController };
