import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductFindOneModule } from "../product-findOne/product-findOne.module";


@Module({
    imports: [ProductFindOneModule, PrismaModule],
    controllers: [],
    providers: [],
})
export class ProductUpdateModule {}