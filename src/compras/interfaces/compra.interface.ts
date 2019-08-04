import { Document } from 'mongoose';

export interface Compra extends Document {
    
    readonly idCompra: string;
    readonly recha_envio: Date;
    readonly cancelado: string;
    readonly direccion: string;
    readonly total: string;
}