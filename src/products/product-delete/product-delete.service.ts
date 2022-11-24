import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../entities/product.entity';
import { ProductFindOneService } from '../product-findOne/product-findOne.service';

@Injectable()
export class ProductDeleteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productId: ProductFindOneService,
  ) {}

  async delete(id: string): Promise<ProductEntity> {
    await this.productId.findOne(id);
    const productRemuve = this.prisma.poduct.delete({ where: { id } });
    if (!productRemuve) {
      throw new Error('product cannot be removed');
    }
    return productRemuve;
  }
}
