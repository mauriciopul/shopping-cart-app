import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './interfaces/invoice.interface';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoiceService {

    constructor(@InjectModel('Invoice') private readonly invoiceModel: Model<Invoice>) { }

    async findAll(): Promise<Invoice[]> {
        return await this.invoiceModel.find();
    };

    async findOne(id: string): Promise<Invoice> {
        return await this.invoiceModel.findById(id);
    };

    async delete(id: string): Promise<Invoice> {
        const deleteInvoice = await this.invoiceModel.findById(id);
        return await deleteInvoice.remove();
    };

    async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
        const createInvoice = await new this.invoiceModel(createInvoiceDto);
        return await createInvoice.save();
    };

    async update(id: string, createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
        const updateInvoice = await this.findOne(id);
        return await updateInvoice.update(createInvoiceDto);
    };

}
