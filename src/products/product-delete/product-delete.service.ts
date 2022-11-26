import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../entities/product.entity';
import { ProductFindOneService } from '../product-findOne/product-findOne.service';
import { Repository } from './product-delete.repository';

@Injectable()
export class ProductDeleteService {
  constructor(
    private readonly repository: Repository,
    private readonly productId: ProductFindOneService,
  ) {}

  async delete(id: string): Promise<ProductEntity> {
    await this.productId.findOne(id);
    const productRemuve = this.repository.delete(id);
    if (!productRemuve) {
      throw new UnprocessableEntityException('product cannot be removed');
    }
    return productRemuve;
  }
}
