import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
    codigoProducto: {
        type: String,
        required: true
    },
    nombreProducto: {
        type: String,
        required: true
    },
    precioProducto: {
        type: Number,
        required: true
    }
});