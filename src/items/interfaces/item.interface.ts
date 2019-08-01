import { Document } from 'mongoose';

export interface Item extends Document {
    readonly id: string;
    readonly nombre: string;
    readonly descripcion: string;
    readonly precio: string;
    readonly cantidadStock: string
}