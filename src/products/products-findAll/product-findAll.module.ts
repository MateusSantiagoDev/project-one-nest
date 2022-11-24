import { Module } from "@nestjs/common";
import { ProductsFindAllController } from "./product-findAll.controller";
import { ProductsFindAllService } from "./product-findAll.service";

@Module({
    providers: [ProductsFindAllController],
    controllers: [ProductsFindAllService],
})
export class ProductsFindAllModule {}