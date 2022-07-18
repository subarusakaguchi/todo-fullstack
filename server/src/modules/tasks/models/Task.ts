import mongoose from "mongoose";

import { TaskSchema } from "./schemas/TaskSchema";

interface ITask {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const Task = mongoose.model<ITask>("Task", TaskSchema);

export { Task, ITask };
