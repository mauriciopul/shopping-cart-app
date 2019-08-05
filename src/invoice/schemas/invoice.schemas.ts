import { Schema } from 'mongoose';

export const invoiceSchema = new Schema({

    //Numero de factura
    invoiceNumber: {
        type: String,
        required: true
    },

    //Codigo de usuario
    userCode: {
        type: String,
        required: true
    },

    //Fecha de factura
    dateInvoice: {
        type: Date,
        required: true,
        default: Date.now
    },

    //Monto de factura
    amountInvoice: {
        type: Number,
        required: true
    },

    //Descuento de factura
    invoiceDiscount: {
        type: Number,
        required: true
    },

    //Total de factura
    invoiceTotal: {
        type: Number,
        required: true
    },
});