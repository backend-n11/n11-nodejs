import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from "@nestjs/core";
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';



@Module({
  controllers: [TodoController],
  providers: [TodoService, {
    provide: APP_PIPE,
    useValue: new ValidationPipe({ // optional qiymat berish uchun 
      // whitelist: true,
      // transform: true,
    }),
    // useClass: ValidationPipe
  }],
})
export class TodoModule { }
