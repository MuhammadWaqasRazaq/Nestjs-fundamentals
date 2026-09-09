import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import middleware1 from './middlewares/middleware1.js';
import middleware from './middlewares/middleware.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(middleware1)
  // app.use(middleware)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
