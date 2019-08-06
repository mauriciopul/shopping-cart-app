import { IsInt, IsString } from 'class-validator';

export class CreateInvoiceDetailDto {

        @IsInt()
        readonly facturaNumero: number;

        @IsString()
        readonly codigoProducto: string;

        @IsInt()
        readonly cantidad: number;

        @IsInt()
        readonly precio: number;

        @IsInt()
        readonly total: number;

}