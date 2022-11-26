import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateDto } from '../dto/create-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { Repository } from './product-create.repository';

@Injectable()
export class ProductCreateService {
  constructor(private readonly repository: Repository) {}

  create(dto: CreateDto): Promise<ProductEntity> {
    const data: ProductEntity = { ...dto, id: randomUUID() };
    const newProduct = this.repository.create(data)
    if (!newProduct) {
      throw new UnprocessableEntityException('product cannot be created');
    }
    return newProduct;
  }
}
