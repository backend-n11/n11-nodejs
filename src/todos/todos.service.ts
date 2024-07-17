import { CreateTodoDto } from "@dto/create-todo.dto";
import { UpdateTodoDto } from "@dto/update-todo.dto";

import { Injectable } from '@nestjs/common';


@Injectable()
export class TodosService {
  create(createTodoDto: CreateTodoDto) {
    return {
      ...createTodoDto,
      id: Date.now()
    }
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
