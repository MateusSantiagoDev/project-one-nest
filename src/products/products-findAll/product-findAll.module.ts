import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductsFindAllController } from "./product-findAll.controller";
import { Repository } from "./product-findAll.repository";
import { ProductsFindAllService } from "./product-findAll.service";

@Module({
    imports: [PrismaModule],
    controllers: [ProductsFindAllController],
    providers: [ProductsFindAllService, Repository],
})
export class ProductsFindAllModule {}