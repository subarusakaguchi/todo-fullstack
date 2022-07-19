import mongoose from "mongoose";

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

  async findById(id: string): Promise<ITask> {
    const task = await Task.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    return task;
  }

  async updateIsComplete(id: string): Promise<void> {
    const task = await Task.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    task.isCompleted = !task.isCompleted;

    await task.save();
  }

  async delete(id: string): Promise<void> {
    await Task.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  }
}

export { TasksRepository };
