import { Schema } from 'mongoose';

export const ItemSchema = new Schema({

    codigoProducto: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        required: true,
        default: true
    }
});
















