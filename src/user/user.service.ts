import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRoposityory: Repository<User>

  ) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(): Promise<User> {
    const user: Omit<User, 'id'> = {
      firstName: "ali",
      lastName: "Muhammad",
      age: 13,
      email: "ali@gmail.com",
      gender: "male",
      password: " ",
    }

    const newUser = this.userRoposityory.create(user)

    await this.userRoposityory.save(newUser)


    return newUser

  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
