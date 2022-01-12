import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";

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
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    const msgError = "Email or password incorrect!";
    if (!user) {
      throw new AppError(msgError);
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError(msgError);
    }
    const token = sign({}, "4c0cafd1773500edf30a69a2f7be8753", {
      subject: user.id,
      expiresIn: "1d",
    });
    return { user, token };
  }
}

export { AuthenticateUserUseCase };
