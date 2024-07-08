import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  imports: [JwtModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
