import { Body, Controller, Post } from '@nestjs/common';
import { CreateDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { ProductCreateService } from './product-create.service';

@Controller('product')
export class ProductCreateController {
  constructor(private readonly product: ProductCreateService) {}

  @Post()
  create(@Body() dto: CreateDto): Promise<ProductEntity> {
    try {
      return this.product.create(dto);
    } catch (err) {
      console.log(err.message);
    }
  }
}
