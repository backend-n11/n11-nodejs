import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, UserModule],
  controllers: [],
  // providers: [{
  //   provide: APP_PIPE,
  //   useClass: ValidationPipe
  // }],
  providers: []
})
export class AppModule { }
