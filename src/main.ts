import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cors = require('cors');

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.use(
    cors({
      origin: true,
      methods: ['POST', 'PUT', 'OPTIONS', 'DELETE', 'GET', 'PATCH'],
      allowedHeaders: [
        'Authorization',
        'Origin',
        'Access-Control-Allow-Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
      ],
      credentials: false,
    }),
  );


  await app.listen(3000);


}
bootstrap();
