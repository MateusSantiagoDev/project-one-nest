import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from '../entities/product.entity';
import { ProductsFindAllService } from './product-findAll.service';

@ApiTags('Produto')
@Controller('product')
export class ProductsFindAllController {
  constructor(private readonly products: ProductsFindAllService) {}

  @Get()
  @ApiOperation({
    summary: 'Visualizar todos os produtos',
  })
  findAll(): Promise<ProductEntity[]> {
    try {
      return this.products.findAll();
    } catch (err) {
      console.log(err.message);
    }
  }
}
