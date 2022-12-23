import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ValidationError } from 'class-validator';
import { BadRequestException } from '@nestjs/common/exceptions';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      if(validationErrors.length) {
        const validate = validationErrors.map(val => {
         return {[val.property]: Object.values(val.constraints)}
        })
        return new BadRequestException(validate);
      }
     
    },
  }));
  await app.listen(3000);
}
bootstrap();
