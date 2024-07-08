import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LoggingInterceptor } from "./auth/loggingInterceptor";

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule, {
    // logger: ['error', 'warn'],
  });

  // app.useGlobalInterceptors(new LoggingInterceptor(), new LoggingInterceptor())
  await app.listen(3000);
}
bootstrap();
