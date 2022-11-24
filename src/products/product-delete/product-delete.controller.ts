import { Controller, Delete, Param } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';
import { ProductDeleteService } from './product-delete.service';

@Controller("product")
export class ProductDeleteController {
  constructor(private readonly productRemuve: ProductDeleteService) {}

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ProductEntity> {
    try {
      return this.productRemuve.delete(id);
    } catch (err) {
      console.log(err.message);
    }
  }
}
