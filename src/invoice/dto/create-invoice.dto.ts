export class CreateInvoiceDto {

    readonly invoiceNumber: string;     //Numero de factura
    readonly userCode: string;          //Codigo de usuario
    readonly dateInvoice: Date;         //Fecha de factura
    readonly amountInvoice: number;     //Monto de factura
    readonly invoiceDiscount: number;   //Descuento de factura
    readonly invoiceTotal: number;      //Total de factura
    
}