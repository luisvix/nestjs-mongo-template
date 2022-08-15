import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { name, version } from '../package.json';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from '@fastify/helmet';
import { config, loadConfig } from './config/helpers/load-config.helper';

async function bootstrap() {
  await loadConfig();

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.register(helmet);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const documentation = new DocumentBuilder().setTitle(name).setVersion(version).build();
  const document = SwaggerModule.createDocument(app, documentation);
  SwaggerModule.setup('docs', app, document);

  await app.listen(config.port, '0.0.0.0');
}

bootstrap();
