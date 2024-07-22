import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "./entities/user.entity";
import { UserController } from './user.controller';
import { UserService } from "./user.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
