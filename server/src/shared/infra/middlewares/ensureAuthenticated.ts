import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../config/auth";
import { AppError } from "../../Errors/AppError";

interface IPayloadToken {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new AppError("Token not found", 404);
  }

  const { secret_token } = auth;

  const [, token] = authToken.split(" ");

  try {
    const { sub: user_id } = verify(token, secret_token) as IPayloadToken;

    req.user = {
      id: user_id,
    };

    return next();
  } catch (err) {
    throw new AppError(err);
  }
}
