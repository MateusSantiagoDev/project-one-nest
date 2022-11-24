import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from '../entities/product.entity';
import { ProductDeleteService } from './product-delete.service';

@ApiTags('Produto')
@Controller('product')
export class ProductDeleteController {
  constructor(private readonly productRemuve: ProductDeleteService) {}

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um produto',
  })
  delete(@Param('id') id: string): Promise<ProductEntity> {
    try {
      return this.productRemuve.delete(id);
    } catch (err) {
      console.log(err.message);
    }
  }
}
