import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductEntity } from "../entities/product.entity";

@Injectable()
export class Repository {
    constructor(private readonly prisma: PrismaService) {}

    update(id: string, data: Partial<ProductEntity>): Promise<ProductEntity> {
       return this.prisma.poduct.update({ where: {id}, data });
    }
}