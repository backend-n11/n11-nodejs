import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { Todo } from "../entities/todo.entity";

// abstract class TodoRepositoryAbstract {
//   // constructor(@InjectRepository(Todo) private readonly databseService: Repository<Todo>) {

//   // }

//   async create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
//     return createTodoDto
//   }
//   findAll() { }
//   findOne(id: number) { }
//   update(id: number, updateTodoDto: UpdateTodoDto) { }
//   remove(id: number) { }
// }


export class TodoRepository {
  constructor(@InjectRepository(Todo) private readonly databseService: Repository<Todo>) { }
  async create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
    return createTodoDto
  }
  remove(id: number): void {

  }
}
