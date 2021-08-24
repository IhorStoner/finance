import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from "path";

async function bootstrap() {

  const PORT = process.env.PORT || 5010;
  const app = await NestFactory.create(AppModule);
  await app.listen(5010, () => console.log(`server is runing on port ${PORT}`));
}
bootstrap();
