import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/Errors/AppError";
import { IUsersRepository } from "../../infra/mongoose/IUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, email, password }: IRequest): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("Email already exists");
    }

    const hashPassword = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });
  }
}

export { CreateUserUseCase };
