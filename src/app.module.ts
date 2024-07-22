import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    MongooseModule.forRoot('mongodb+srv://khkhamidullo:UhOf3IXtEd0ebIy0@nest-mongo.zhf5htc.mongodb.net/?retryWrites=true&w=majority&appName=nest-mongo')
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],

    // })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
