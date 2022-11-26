import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class Repository {
  constructor(private readonly prisma: PrismaService) {}

  delete(id: string): Promise<ProductEntity> {
    return this.prisma.poduct.delete({ where: { id } });
  }
}
