import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoModule } from './todo/todo.module';
import { ProductModule } from './product/product.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [TodoModule, ProductModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }