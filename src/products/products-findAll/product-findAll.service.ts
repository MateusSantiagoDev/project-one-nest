import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductEntity } from "../entities/product.entity";

@Injectable()
export class ProductsFindAllService {
    constructor(private readonly prisma: PrismaService) {}

    findAll(): Promise<ProductEntity[]> {
        return this.prisma.poduct.findMany()
    }

}