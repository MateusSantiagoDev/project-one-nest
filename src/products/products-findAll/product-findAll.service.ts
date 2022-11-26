import { Injectable } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { Repository } from "./product-findAll.repository";

@Injectable()
export class ProductsFindAllService {
    constructor(private readonly repository: Repository) {}

    findAll(): Promise<ProductEntity[]> {
        return this.repository.findAll();
    }

}