import mongoose from "mongoose";

import { TokenSchema } from "./schemas/TokenSchema";

interface IToken {
  token: string;
  user_id: string;
  expires_date: Date;
}

const Token = mongoose.model<IToken>("Token", TokenSchema);

export { Token, IToken };
