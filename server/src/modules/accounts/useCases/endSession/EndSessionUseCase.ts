import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/Errors/AppError";
import { ITokensRepository } from "../../infra/mongoose/ITokensRepository";

@injectable()
class EndSessionUseCase {
  constructor(
    @inject("TokensRepository")
    private tokensRepository: ITokensRepository
  ) {}
  async execute(id: string): Promise<void> {
    const tokenExists = await this.tokensRepository.findById(id);

    if (!tokenExists) {
      throw new AppError("Token for delete not found", 404);
    }

    await this.tokensRepository.deleteById(id);
  }
}

export { EndSessionUseCase };
