import { Injectable } from "@nestjs/common";
import { SignInDto, SignUpDto } from "./dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userSerice: UserService) {}

  signUp(singUpDto: SignUpDto) {
    return this.userSerice.singUp(singUpDto);
  }

  signIn(singInDto: SignInDto) {
    return this.userSerice.signIn(singInDto);
  }

  refreshToken(refreshTokenDto: Record<string, any>) {
    return "Ok";
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(updateAuthDto: Record<string, any>) {
    return `This action updates auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
