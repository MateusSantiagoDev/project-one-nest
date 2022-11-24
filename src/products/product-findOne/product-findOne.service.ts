import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ProductEntity } from "../entities/product.entity";

@Injectable()
export class ProductFindOneService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: string): Promise<ProductEntity> {
        const unique = await this.prisma.poduct.findUnique({ where: {id} });
        if(!unique) {
            throw new Error(`Não foi encontrado nenhum registrop com o ID: ${unique}`);
        }
        return unique;
    }
} 