import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UpdateDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { ProductFindOneService } from '../product-findOne/product-findOne.service';
import { Repository } from './product-update.repository';

@Injectable()
export class ProductUpdateService {
  constructor(
    private readonly repository: Repository,
    private readonly productId: ProductFindOneService,
  ) {}

  async update(id: string, dto: UpdateDto): Promise<ProductEntity> {
    await this.productId.findOne(id);
    const data: Partial<ProductEntity> = { ...dto };
    const productEdt = this.repository.update(id, data)
    if (!productEdt) {
      throw new UnprocessableEntityException("product cannot be updated");
    }
    return productEdt;
  }
}
