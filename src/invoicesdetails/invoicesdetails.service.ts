import { Injectable } from '@nestjs/common';
import { InvoiceDetail } from './interfaces/invoicedetail.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInvoiceDetailDto } from './dto/create-invoicedetail.dto';

@Injectable()
export class InvoicesdetailsService {

    constructor(@InjectModel('InvoiceDetail') private readonly invoicedetailModel: Model<InvoiceDetail>) { }

    async findAll(): Promise<InvoiceDetail[]> {
        return await this.invoicedetailModel.find();
    };

    async findOne(id: string): Promise<InvoiceDetail> {
        return await this.invoicedetailModel.findById(id);
    };

    async delete(id: string): Promise<InvoiceDetail> {
        const deleteInvoiceDetail = await this.invoicedetailModel.findById(id);
        return await deleteInvoiceDetail.remove();
    };

    async create(createInvoiceDetailDto: CreateInvoiceDetailDto): Promise<InvoiceDetail> {
        const createInvoiceDetail = await new this.invoicedetailModel(createInvoiceDetailDto);
        return await createInvoiceDetail.save();
    };

    async update(id: string, createInvoiceDetailDto: CreateInvoiceDetailDto): Promise<InvoiceDetail> {
        const updateInvoiceDetail = await this.findOne(id);
        return await updateInvoiceDetail.update(createInvoiceDetailDto);
    };


};
