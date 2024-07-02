import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateUserDto } from "./dto/user.dto";
import { IUser } from "./interface/user.interface";
import { UpdateUserDto } from "./dto/update.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  findAll(): IUser[] {
    return this.appService.findAll()
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.appService.create(createUserDto)
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.appService.update(+id, updateUserDto)
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.appService.delete(+id)
  }
}