import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsFindAllModule } from './products/products-findAll/product-findAll.module';

@Module({
  imports: [ProductsFindAllModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
