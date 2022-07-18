import { ObjectId } from "mongoose";

import { IUser } from "../../models/User";

interface IUserDTO {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  tasks?: ObjectId[];
}

interface IFindUserDTO {
  user_id: string;
  with_tasks: boolean;
}

interface IUsersRepository {
  create(data: IUserDTO): Promise<IUser>;
  findByEmail(email: string): Promise<IUser>;
  findById(data: IFindUserDTO): Promise<any>;
  updateData(data: IUserDTO): Promise<IUser>;
}

export { IUsersRepository, IUserDTO, IFindUserDTO };
