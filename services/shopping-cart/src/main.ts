import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Configuration from './core/infra/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Running on ${Configuration.app.port} at ${Configuration.app.environment} environment`);
  await app.listen(Configuration.app.port);
}

bootstrap();
