import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsFindAllModule } from './products/products-findAll/product-findAll.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductsFindAllModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
