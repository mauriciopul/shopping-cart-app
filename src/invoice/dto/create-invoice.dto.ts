import { IsString, IsDate, IsInt } from 'class-validator';

export class CreateInvoiceDto {

    @IsString()
    readonly invoiceNumber: string;     //Numero de factura

    @IsString()
    readonly userCode: string;          //Codigo de usuario

    @IsDate()
    readonly dateInvoice: Date;         //Fecha de factura

    @IsInt()
    readonly amountInvoice: number;     //Monto de factura

    @IsInt()
    readonly invoiceDiscount: number;   //Descuento de factura

    @IsInt()
    readonly invoiceTotal: number;      //Total de factura

}