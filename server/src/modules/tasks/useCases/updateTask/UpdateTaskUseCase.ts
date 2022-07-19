import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/Errors/AppError";
import { ITasksRepository } from "../../infra/mongoose/ITasksRepository";

@injectable()
class UpdateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository
  ) {}

  async execute(id: string): Promise<void> {
    const taskExists = await this.tasksRepository.findById(id);

    if (!taskExists) {
      throw new AppError("Task not found", 404);
    }
    await this.tasksRepository.updateIsComplete(id);
  }
}

export { UpdateTaskUseCase };
