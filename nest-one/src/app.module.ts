import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { ProductModule } from './product/product.module';
import { BookModule } from './book/book.module';
import { TodosModule } from './todos/todos.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [TodoModule, ProductModule, BookModule, TodosModule, CatsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule { }
