import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';


@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/nest'), UserModule, ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
