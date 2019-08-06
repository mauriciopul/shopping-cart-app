import { IsString, IsInt } from 'class-validator';

export class CreateProductDto {

    @IsString()
    readonly codigoProducto: string;

    @IsString()
    readonly nombreProducto: string;

    @IsInt()
    readonly precioProducto: number;
}