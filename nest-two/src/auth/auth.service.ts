import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) { }
  async register(createAuthDto: CreateAuthDto) {
    return await this.userService.create(createAuthDto)
  }

  login(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  getMe(id: number) {
    return `This action returns a #${id} auth`;
  }
}
