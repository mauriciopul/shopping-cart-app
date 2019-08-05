import { Document } from 'mongoose';

export interface InvoiceDetail extends Document {
    readonly facturaNumero: number;
    readonly codigoProducto: string;
    readonly cantidad: number;
    readonly precio: number;
    readonly total: number;
}