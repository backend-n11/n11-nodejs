import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from "./user/entities/user.entity";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,



    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'postgres',
    //   // entities: [__dirname + "../**/*.entity{.ts,.js}"],
    //   entities: [User],
    //   synchronize: true,
    // })

    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'postgres',
    //     password: 'postgres',
    //     database: 'postgres',
    //     // entities: [__dirname + "../**/*.entity{.ts,.js}"],
    //     entities: [User],
    //     synchronize: true,
    //   })
    // })

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configServive: ConfigService) => ({
        type: "postgres",
        host: configServive.get("DATABASE_HOST"),
        port: configServive.get("DATABASE_PORT"),
        username: configServive.get("DATABASE_USERNAME"),
        password: configServive.get("DATABASE_PASSWORD"),
        database: configServive.get("DATABASE_NAME"),
        // entities: [__dirname + "../**/*.entity{.ts,.js}"],
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
