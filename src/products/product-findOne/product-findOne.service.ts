import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { Repository } from "./product-findOne.repository";

@Injectable()
export class ProductFindOneService {
    constructor(private readonly repository: Repository) {}

    async findOne(id: string): Promise<ProductEntity> {
        const unique = await this.repository.findOne(id)
        if(!unique) {
            throw new UnprocessableEntityException(`No record was found with the ID: ${unique}`);
        }
        return unique;
    }
} 