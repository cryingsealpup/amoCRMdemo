import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // since we need to interact with Nest from Vue 
  console.log(app);
  await app.listen(3000);
}
bootstrap();
