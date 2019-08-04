import { Schema } from "mongoose";

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
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

