import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../../accounts/infra/mongoose/IUserRepository";
import { ITasksRepository } from "../../infra/mongoose/ITasksRepository";
import { ITask } from "../../models/Task";

interface IRequest {
  user_id: string;
  title: string;
  description: string;
}

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject("TasksRepository")
    private tasksRepository: ITasksRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ title, description, user_id }: IRequest): Promise<ITask> {
    const user = await this.usersRepository.findById({
      user_id,
      with_tasks: false,
    });

    const newTask = await this.tasksRepository.create({ title, description });

    // eslint-disable-next-line no-underscore-dangle
    user.tasks = [...user.tasks, newTask._id.toString()];

    await this.usersRepository.updateData(user);

    return newTask;
  }
}

export { CreateTaskUseCase };
