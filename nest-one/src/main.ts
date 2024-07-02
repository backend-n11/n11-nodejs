import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
  const port = process.env.PORT || "4000"
  const app = await NestFactory.create(AppModule)
  await app.listen(port)
}

start()