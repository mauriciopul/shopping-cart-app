import { Schema } from "mongoose";


export const UserSchema = new Schema({
    userCode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        required: true,
        default: true
    },
    address: String,
    phone: String,
    createAt: {
        type: Date,
        default: Date.now
    }
});

