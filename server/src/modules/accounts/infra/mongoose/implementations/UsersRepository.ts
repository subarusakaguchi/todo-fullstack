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

  async findById({ user_id, with_tasks }: IFindUserDTO): Promise<IUser> {
    if (with_tasks) {
      const user = await User.findOne({ _id: user_id });

      return user;
    }

    const user = await User.findOne({ _id: user_id });

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
