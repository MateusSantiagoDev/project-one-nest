import { PartialType } from "@nestjs/swagger";
import { CreateDto } from "./create-product.dto";

export class UpdateDto extends PartialType(CreateDto) {}