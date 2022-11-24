import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDto } from '../dto/update-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { ProductFindOneService } from '../product-findOne/product-findOne.service';

@Injectable()
export class ProductUpdateService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productId: ProductFindOneService,
  ) {}

  async update(id: string, dto: UpdateDto): Promise<ProductEntity> {
    await this.productId.findOne(id);
    const data: Partial<ProductEntity> = { ...dto };
    const productEdt = this.prisma.poduct.update({ where: { id }, data });
    if (!productEdt) {
      throw new Error("product cannot be updated");
    }
    return productEdt;
  }
}
