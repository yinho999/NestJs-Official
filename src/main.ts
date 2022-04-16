import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Remove all the unwanted properties
      whitelist: true,

      // Stop the validation if the property is not in the whitelist
      forbidNonWhitelisted: true,

      // Enabling auto transform feature of ValidationPipe
      // This will transform the data to the required format
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
