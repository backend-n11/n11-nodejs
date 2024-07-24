import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({
      data: createUserDto
    })

    return user
  }


  async createMany(createUsersDto: Prisma.UserCreateInput[]): Promise<Prisma.BatchPayload> {
    const users = await this.prisma.user.createMany({
      data: createUsersDto
    })

    return users
  }


  async findAll(take: string, skip: string): Promise<User[]> {



    const query = {
      skip: (+skip - 1) * +take,
      take: +take
    }

    console.log(query)
    return this.prisma.user.findMany(query)
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
