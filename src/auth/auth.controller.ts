import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AllExceptionsFilter, CustomException } from "./user.exception";


@UseFilters(AllExceptionsFilter) // TODO: ishlatilishi
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  // @UseFilters(AllExceptionsFilter)
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }


  // @UseFilters(GetExceptionsFilter)
  @Get()
  findAll() {
    // throw new CustomException('ForBidden', HttpStatus.FORBIDDEN, new BadRequestException())
    // throw new HttpException('ForBidden', HttpStatus.FORBIDDEN)
    // throw new BadRequestException()
    const result = this.authService.findAll();
    if (!result) {
      throw new CustomException('ForBidden', HttpStatus.FORBIDDEN, new BadRequestException())
    }
    return result
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
