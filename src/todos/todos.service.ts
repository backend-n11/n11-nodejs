import { Injectable } from "@nestjs/common";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export class TodosService {
  private readonly todos: ITodo[] = [];

  findAll(): ITodo[] {
    return this.todos;
  }

  findOne(id: number): ITodo {
    return this.todos.find((todo) => todo.id === id);
  }

  create(todo: ITodo) {
    this.todos.push(todo);
  }

  update(id: number, updatedTodo: ITodo) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return null;
    }
    this.todos[index] = updatedTodo;
    return updatedTodo;
  }

  deletebyId(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
