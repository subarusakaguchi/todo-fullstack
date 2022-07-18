import { ITask } from "../../models/Task";

interface ITasksDTO {
  title: string;
  description?: string;
}

interface ITasksRepository {
  create(data: ITasksDTO): Promise<ITask>;
}

export { ITasksRepository, ITasksDTO };
