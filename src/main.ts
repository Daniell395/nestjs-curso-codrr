import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'
import { CORS } from './constants';

async function bootstrap() {
  //toda la parte de configuracion
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  app.use(morgan('dev'))

  app.setGlobalPrefix('api') //prefijo para la version 

  app.enableCors(CORS)

  await app.listen(configService.get('PORT'));

  console.log(`Application running on: ${await app.getUrl()}`)
}
bootstrap();
