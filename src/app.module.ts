import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsFindAllModule } from './products/products-findAll/product-findAll.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductCreateModule } from './products/product-create/product-create.module';
import { ProductFindOneModule } from './products/product-findOne/product-findOne.module';

@Module({
  imports: [ProductsFindAllModule, ProductCreateModule, ProductFindOneModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
