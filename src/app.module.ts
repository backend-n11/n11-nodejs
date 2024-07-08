import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./auth/loggingInterceptor";
import { ConfigModule } from "@nestjs/config";
import { TodoModule } from './todo/todo.module';
import config from "./config/configuration";
import configuration from "./config/configuration";
// import {config}  from "dotenv"
// config()

console.log(config())
console.log("FOR SHOVKAt")

@Module({
  imports: [
    AuthModule,
    UserModule,

    JwtModule.register({
      global: true,
      
    }),

    TodoModule,
      // ConfigModule.forRoot({
      // isGlobal:true,
      // load: [configuration],
      // // envFilePath:".env"
      // })
  ],
  controllers: [],
  providers: [
  //   {
  //   provide:APP_INTERCEPTOR,
  //   useClass:LoggingInterceptor
  // }

],
})
export class AppModule {}
