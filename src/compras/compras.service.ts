import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Compra } from './interfaces/compra.interface'
import { CreateCompraDto } from './dto/create-compra-dto';

@Injectable()
export class ComprasService {

    constructor(@InjectModel('Compra') private readonly comprasModel: Model<Compra>) { };

    async allCompras(): Promise<Compra[]> {
        return await this.comprasModel.find();
    }

    async unaCompra(id: string): Promise<Compra> {
        return await this.comprasModel.findById(id);
    }

    async create(createCompraDto: CreateCompraDto): Promise<Compra> {
        const createCompra = new this.comprasModel(createCompraDto);
        return await createCompra.save();
    }

    async delete(id: string): Promise<Compra> {
        const deleteCompra = await this.comprasModel.findById(id);
        return await deleteCompra.remove();
    }

    async update(id: string, createCompraDto: CreateCompraDto): Promise<Compra>{
        const actualizaCompra = await this.comprasModel.findById(id)
        return await actualizaCompra.update(createCompraDto);

    }



}
