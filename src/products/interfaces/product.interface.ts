import { Document } from 'mongoose';
import {User} from '../../users/interfaces/user.interface';

export interface Product extends Document {
    readonly codigoProducto: string;
    readonly nombreProducto: string;
    readonly precioProducto: number;
    readonly userCode: User;    
}





