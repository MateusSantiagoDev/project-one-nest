import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductFindOneController } from "./product-findOne.controller";
import { ProductFindOneService } from "./product-findOne.service";

@Module({
    imports: [PrismaModule],
    controllers: [ProductFindOneController],
    providers: [ProductFindOneService],
})
export class ProductFindOneModule {}