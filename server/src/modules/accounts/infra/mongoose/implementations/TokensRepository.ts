import mongoose from "mongoose";

import { IToken, Token } from "../../../models/Token";
import { ITokenDTO, ITokensRepository } from "../ITokensRepository";

class TokensRepository implements ITokensRepository {
  async create({ token, user_id, expires_date }: ITokenDTO): Promise<IToken> {
    const newToken = new Token({
      token,
      user_id,
      expires_date,
    });

    await newToken.save();

    return newToken;
  }

  async findById(id: string): Promise<IToken> {
    const tokenToFind = await Token.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    return tokenToFind;
  }

  async deleteById(id: string): Promise<void> {
    await Token.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  }
}

export { TokensRepository };
