import { Request, Response } from "express";
import { container } from "tsyringe";

import { EndSessionUseCase } from "./EndSessionUseCase";

class EndSessionController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const endSessionUseCase = container.resolve(EndSessionUseCase);

    await endSessionUseCase.execute(id);

    return res.status(204).send();
  }
}

export { EndSessionController };
