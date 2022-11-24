import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from '../entities/product.entity';
import { ProductFindOneService } from './product-findOne.service';

@ApiTags('Produto')
@Controller('product')
export class ProductFindOneController {
  constructor(private readonly productId: ProductFindOneService) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar um produto pelo ID',
  })
  findOne(@Param('id') id: string): Promise<ProductEntity> {
    try {
      return this.productId.findOne(id);
    } catch (err) {
      console.log(err.message);
    }
  }
}
