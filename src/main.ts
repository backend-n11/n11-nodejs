import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomGuard } from "./user/guard/custom.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: this is global validation
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  // }))

  // app.useGlobalGuards(new RoleGuard())
  app.useGlobalGuards(new CustomGuard())
  await app.listen(3000);
}
bootstrap();
