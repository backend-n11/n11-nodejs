import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(loggerFunction).forRoutes('*')
    // consumer.apply(MyMiddleware, loggerFunction).forRoutes('*')
    // consumer.apply(MyMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL })
  }
}

// Task
// users 
// nest generate resource user
// User Get methodlarini 