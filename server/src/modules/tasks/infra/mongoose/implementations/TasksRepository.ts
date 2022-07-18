import { ITask, Task } from "../../../models/Task";
import { ITasksDTO, ITasksRepository } from "../ITasksRepository";

class TasksRepository implements ITasksRepository {
  async create({ title, description }: ITasksDTO): Promise<ITask> {
    const newTask = new Task({
      title,
      description,
    });

    await newTask.save();

    return newTask;
  }
}

export { TasksRepository };
