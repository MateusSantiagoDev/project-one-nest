import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductFindOneModule } from "../product-findOne/product-findOne.module";
import { ProductUpdateController } from "./product-update.controller";
import { Repository } from "./product-update.repository";
import { ProductUpdateService } from "./product-update.service";


@Module({
    imports: [ProductFindOneModule, PrismaModule],
    controllers: [ProductUpdateController],
    providers: [ProductUpdateService, Repository],
})
export class ProductUpdateModule {}