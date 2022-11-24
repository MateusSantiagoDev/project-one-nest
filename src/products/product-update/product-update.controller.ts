import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { ProductUpdateService } from './product-update.service';

@ApiTags('Produto')
@Controller('product')
export class ProductUpdateController {
  constructor(private readonly productEdt: ProductUpdateService) {}

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um produto pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateDto,
  ): Promise<ProductEntity> {
    try {
      return this.productEdt.update(id, dto);
    } catch (err) {
      console.log(err.mesage);
    }
  }
}
