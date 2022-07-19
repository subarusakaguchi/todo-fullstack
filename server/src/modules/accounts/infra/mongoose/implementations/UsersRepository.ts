import mongoose from "mongoose";

import { IUser, User } from "../../../models/User";
import { IFindUserDTO, IUserDTO, IUsersRepository } from "../IUserRepository";

class UsersRepository implements IUsersRepository {
  async create({
    _id,
    name,
    email,
    password,
    tasks,
  }: IUserDTO): Promise<IUser> {
    const newUser = new User({
      _id,
      name,
      email,
      password,
      tasks,
    });

    await newUser.save();

    return newUser;
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await User.findOne({ email });

    return user;
  }

  async findById({ user_id, with_tasks }: IFindUserDTO): Promise<any> {
    if (with_tasks) {
      const user = await User.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(user_id),
          },
        },
        {
          $lookup: {
            from: "tasks",
            localField: "tasks",
            foreignField: "_id",
            as: "tarefas",
          },
        },
        {
          $project: {
            name: 1,
            email: 1,
            tarefas: {
              _id: 1,
              title: 1,
              description: 1,
              isCompleted: 1,
            },
          },
        },
      ]);

      return user;
    }

    const user = await User.findOne({
      _id: new mongoose.Types.ObjectId(user_id),
    });

    return user;
  }

  async updateData({
    _id,
    name,
    email,
    password,
    tasks,
  }: IUserDTO): Promise<IUser> {
    const user = await User.findOne({ _id });

    Object.assign(user, {
      name,
      email,
      password,
      tasks,
    });

    await user.save();

    return user;
  }
}

export { UsersRepository };
