import { IToken } from "../../models/Token";

interface ITokenDTO {
  token: string;
  expires_date: Date;
  user_id: string;
}

interface ITokensRepository {
  create(data: ITokenDTO): Promise<IToken>;
  findByToken(token: string): Promise<IToken>;
  deleteById(id: string): Promise<void>;
}

export { ITokensRepository, ITokenDTO };
