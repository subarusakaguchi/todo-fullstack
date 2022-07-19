/* eslint-disable no-underscore-dangle */
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/containers/providers/DateProvider/interface/IDateProvider";
import { AppError } from "../../../../shared/Errors/AppError";
import { ITokensRepository } from "../../infra/mongoose/ITokensRepository";
import { IUsersRepository } from "../../infra/mongoose/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  tokenId: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("TokensRepository")
    private tokensRepository: ITokensRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new AppError("Email or password are incorrect");
    }

    const passwordMatch = compare(password, userExists.password);

    if (!passwordMatch) {
      throw new AppError("Email or password are incorrect");
    }

    const { secret_token, expires_in_token, expires_token_days } = auth;

    const token = sign({}, secret_token, {
      subject: userExists._id.toString(),
      expiresIn: expires_in_token,
    });

    const expires_date = this.dateProvider.addDays(expires_token_days);

    const tokenSaved = await this.tokensRepository.create({
      token,
      user_id: userExists._id,
      expires_date,
    });

    const tokenReturn: IResponse = {
      user: {
        name: userExists.name,
        email: userExists.email,
      },
      token,
      tokenId: tokenSaved._id.toString(),
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
