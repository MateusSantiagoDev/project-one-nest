import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsFindAllModule } from './products/products-findAll/product-findAll.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductCreateModule } from './products/product-create/product-create.module';
import { ProductFindOneModule } from './products/product-findOne/product-findOne.module';
import { ProductUpdateModule } from './products/product-update/product-update.module';
import { ProductDeleteModule } from './products/product-delete/product-delete.module';

@Module({
  imports: [
    ProductsFindAllModule,
    ProductCreateModule,
    ProductFindOneModule,
    ProductUpdateModule,
    ProductDeleteModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
