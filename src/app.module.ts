import { Module } from "@nestjs/common";
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({

  controllers: [],
  providers: [],
  imports: [TodosModule, UsersModule],
})
export class AppModule { }
