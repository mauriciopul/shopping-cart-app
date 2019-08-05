import { Document } from 'mongoose';

export interface Product extends Document {
    readonly codigoProducto: string;
    readonly nombreProducto: string;
    readonly precioProducto: number;
}