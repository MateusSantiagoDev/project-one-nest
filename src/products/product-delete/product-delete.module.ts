import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductFindOneModule } from "../product-findOne/product-findOne.module";
import { ProductDeleteController } from "./product-delete.controller";
import { ProductDeleteService } from "./product-delete.service";

@Module({
    imports: [ProductFindOneModule, PrismaModule],
    controllers:[ProductDeleteController],
    providers: [ProductDeleteService],
})
export class ProductDeleteModule {}
