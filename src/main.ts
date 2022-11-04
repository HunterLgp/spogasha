import * as dotenv from 'dotenv';
dotenv.config();
import * as config from 'config';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModules } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const env = config.get<string>('app.node_env');
const name = config.get<string>('app.app_name');
const port = config.get<string>('app.app_port');
const prefix = config.get<string>('app.app_prefix');
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModules, {
    cors: true,
  });
  app.setGlobalPrefix(prefix);
  app.enableCors();
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(name)
    .setDescription(name)
    .setVersion(prefix)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${prefix}/spogasha-docs`, app, document, {
    customSiteTitle: name,
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      displayRequestDuration: true,
    },
  });
  app.use(helmet());
  await app.listen(port);
}
bootstrap();
