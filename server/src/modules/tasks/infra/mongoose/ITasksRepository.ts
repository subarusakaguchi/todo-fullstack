import { ITask } from "../../models/Task";

interface ITasksDTO {
  title: string;
  description?: string;
}

interface ITasksRepository {
  create(data: ITasksDTO): Promise<ITask>;
  findById(id: string): Promise<ITask>;
  updateIsComplete(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ITasksRepository, ITasksDTO };
