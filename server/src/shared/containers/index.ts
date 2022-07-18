import { container } from "tsyringe";

import "./providers/DateProvider";

import { TokensRepository } from "../../modules/accounts/infra/mongoose/implementations/TokensRepository";
import { UsersRepository } from "../../modules/accounts/infra/mongoose/implementations/UsersRepository";
import { ITokensRepository } from "../../modules/accounts/infra/mongoose/ITokensRepository";
import { IUsersRepository } from "../../modules/accounts/infra/mongoose/IUserRepository";
import { TasksRepository } from "../../modules/tasks/infra/mongoose/implementations/TasksRepository";
import { ITasksRepository } from "../../modules/tasks/infra/mongoose/ITasksRepository";

container.registerSingleton<ITasksRepository>(
  "TasksRepository",
  TasksRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ITokensRepository>(
  "TokensRepository",
  TokensRepository
);
