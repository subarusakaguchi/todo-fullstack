import mongoose, { ObjectId } from "mongoose";

import { UserSchema } from "./schemas/UserSchema";

interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  tasks: string[];
}

const User = mongoose.model<IUser>("User", UserSchema);

export { User, IUser };
