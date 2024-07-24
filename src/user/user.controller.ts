import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SkipThrottle } from "@nestjs/throttler";
import { Prisma } from "@prisma/client";
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }

  @Post('many')
  createMany(@Body() createUsersDto: Prisma.UserCreateInput[]) {
    return this.userService.createMany(createUsersDto);
  }

  @SkipThrottle()
  @Get()
  findAll(@Query('skip') skip: string, @Query('take') take: string) {
    return this.userService.findAll(take, skip);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
