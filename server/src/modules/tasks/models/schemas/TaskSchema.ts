import { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },

  description: String,

  isCompleted: { type: Boolean, default: false },

  created_at: { type: Date, default: Date.now },

  updated_at: { type: Date, default: Date.now },
});

export { TaskSchema };
