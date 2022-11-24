import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateDto {
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsUrl()
  image: string;
}
