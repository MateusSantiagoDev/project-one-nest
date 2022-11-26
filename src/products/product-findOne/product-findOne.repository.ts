import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductEntity } from "../entities/product.entity";

@Injectable()
export class Repository {
    constructor(private readonly prisma: PrismaService) {}

    findOne(id: string): Promise<ProductEntity> {
       return this.prisma.poduct.findUnique({ where: { id } });
    }
}