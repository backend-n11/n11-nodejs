import { Body, Controller, Delete, Get, Param, ParseBoolPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  create(@Body(new ValidationPipe({ whitelist: true })) createTodoDto: CreateTodoDto) {
    // create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseBoolPipe) id: boolean) {
    return id
    // return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
