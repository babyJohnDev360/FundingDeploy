import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*', // Allow all origins (for development purposes)
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
      allowedHeaders: 'Content-Type, Accept, Authorization', // Specify allowed headers
    },
  });

  // Enable global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  // Start the server
  const port =  3001; // Changed default port to 3001
  await app.listen(port, async () => {
    console.log(`Server is running on port no. ${port}`);
  });
}

bootstrap();
