import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "src/config/configuration";

@Module({
  imports: [JwtModule,
    // ConfigModule.forRoot({
    //   // isGlobal:true,
    //   load: [configuration],
    //   // envFilePath:".env"
    // })
  ],
  controllers: [],
  providers: [UserService, ConfigService],
  exports: [UserService],
})

export class UserModule { }
