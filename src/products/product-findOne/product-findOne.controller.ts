import { Controller, Get, Param } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { ProductFindOneService } from "./product-findOne.service";

@Controller("product")
export class ProductFindOneController {
    constructor(private readonly productId: ProductFindOneService) {}

    @Get(":id")
    findOne(@Param("id") id:string ): Promise<ProductEntity> {
        try {
            return this.productId.findOne(id)
        } catch (err) {
            console.log(err.message)
        }
    }
}