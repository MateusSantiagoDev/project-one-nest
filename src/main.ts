import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  const config = new DocumentBuilder()
  .setTitle("E-commerce de Eletrônicos")
  .setDescription("Aplicação para gestão de produtos")
  .setVersion("1.0.0")
  .addTag("Status")
  .addTag("Produto")
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document)

  await app.listen(3322);
}
bootstrap();
