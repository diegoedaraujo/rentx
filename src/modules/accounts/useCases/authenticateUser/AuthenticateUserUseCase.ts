import { inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}
  async execute({ email, password }): IRequest {
    const user = await this.userRepository.findByEmail(email);
    const msgError = "Email or password incorrect!";
    if (!user) {
      throw new Error(msgError);
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error(msgError);
    }
  }
}

export { AuthenticateUserUseCase };
