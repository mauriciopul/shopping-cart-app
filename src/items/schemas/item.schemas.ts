import { Schema } from 'mongoose';

export const ItemSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    cantidadStock: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        required: true,
        default: true
    }
});
















