import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../../accounts/infra/mongoose/IUserRepository";

@injectable()
class GetAllTasksUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute(user_id: string): Promise<void> {
    const userWithTasks = await this.usersRepository.findById({
      user_id,
      with_tasks: true,
    });

    // return userWithTasks;
  }
}

export { GetAllTasksUseCase };