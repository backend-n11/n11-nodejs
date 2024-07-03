import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TodoModule } from "src/todo/todo.module";

@Module({
  imports: [TodoModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule { }
