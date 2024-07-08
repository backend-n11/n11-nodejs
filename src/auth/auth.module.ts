import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "./loggingInterceptor";
import { ConfigModule } from "@nestjs/config";
import configuration from "src/config/configuration";

@Module({
  imports: [UserModule,
    // ConfigModule.forRoot({
    //   // isGlobal:true,
    //   load: [configuration],
    //   // envFilePath:".env"
    // })
  ],
  controllers: [AuthController],
  providers: [AuthService,
    //   {
    //   provide:APP_INTERCEPTOR,
    //   useClass :LoggingInterceptor
    // }

    // {
    //     provide:APP_INTERCEPTOR,
    //     useValue : new LoggingInterceptor()
    // }  
  ],
})
export class AuthModule { }
