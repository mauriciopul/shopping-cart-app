import { Schema } from "mongoose";

export const InvoiceDetailSchema = new Schema({

    facturaNumero: {
        type: Number,
        required: true
    },

    codigoProducto: {
        type: String,
        required: true
    },

    cantidad: {
        type: Number,
        required: true
    },

    precio: {
        type: Number,
        required: false
    },

    total: {
        type: Number,
        required: true
    }

});