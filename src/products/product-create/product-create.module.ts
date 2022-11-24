import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductCreateController } from "./product-create.controller";
import { ProductCreateService } from "./product-create.service";


@Module({
    imports: [PrismaModule],
    controllers: [ProductCreateController],
    providers: [ProductCreateService],
})
export class ProductCreateModule {}