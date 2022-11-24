import { Controller, Get } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { ProductsFindAllService } from "./product-findAll.service";

@Controller("product")
export class ProductsFindAllController {
    constructor(private readonly products: ProductsFindAllService) {}

    @Get()
    findAll(): Promise<ProductEntity[]>{
        return this.products.findAll()
    }
}