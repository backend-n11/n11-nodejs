import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";


/// INSTALL: pnpm install --save @nestjs/serve-static

@Module({
  imports: [
    // MulterModule.register({
    //   dest: "./upload",
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
