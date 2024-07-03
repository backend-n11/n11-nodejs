import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/nest'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
