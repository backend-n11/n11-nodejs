import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Eroles } from "./constants/roles";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from "./roles";
import { UserService } from './user.service';

export interface MyRequest extends Request {
  user: any
}

@Controller('user')

// @UseGuards(CustomGuard) // 2  holat
export class UserController {
  constructor(private readonly userService: UserService) { }

  // @UseGuards(RoleGuard)
  @Post()
  @Roles([Eroles.ADMIN, Eroles.SUPERADMIN])
  create(@Body() createUserDto: CreateUserDto, @Req() request: MyRequest) {
    console.log({ user: request.user })
    return this.userService.create(createUserDto);
  }

  @Get()
  // @UseGuards(CustomGuard)  1 holat
  findAll() {
    return this.userService.findAll();
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
