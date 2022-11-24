import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateDto } from "../dto/create-product.dto";
import { ProductEntity } from "../entities/product.entity";

@Injectable()
export class ProductCreateService {
    constructor(private readonly prisma: PrismaService) {}

    create(dto: CreateDto): Promise<ProductEntity> {
        const data: ProductEntity = { ...dto, id: randomUUID() };
        return this.prisma.poduct.create({ data })
    }
}