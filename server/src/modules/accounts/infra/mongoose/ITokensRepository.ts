import { ObjectId } from "mongoose";

import { IToken } from "../../models/Token";

interface ITokenDTO {
  token: string;
  expires_date: Date;
  user_id: ObjectId;
}

interface ITokensRepository {
  create(data: ITokenDTO): Promise<IToken>;
  findById(token: string): Promise<IToken>;
  deleteById(id: string): Promise<void>;
}

export { ITokensRepository, ITokenDTO };
