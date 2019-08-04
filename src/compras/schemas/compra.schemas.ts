import { Schema } from 'mongoose';
import {UsersController} from 'src/users/users.controller';

export const CompraSchema = new Schema({
    idCompra: {
        type: String,
        required: true,
    },
    recha_envio: {
        type: String,
        required: true,
    },
    cancelado: {
        type: Boolean,
        required: true,
        default: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    total: {
        type: String,
        required: true,
    }
}) 