import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    MongooseModule.forRoot('mongodb+srv://khkhamidullo:UhOf3IXtEd0ebIy0@nest-mongo.zhf5htc.mongodb.net/?retryWrites=true&w=majority&appName=nest-mongo'),
    TodoModule
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],

    // })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
