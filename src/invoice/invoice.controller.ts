import { Controller, Res, Get, HttpStatus, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('invoices')
export class InvoiceController {

    constructor(private readonly invoicesService: InvoiceService) { };

    @Get()
    async findAll(@Res() resp: Response) {
        const invoices = await this.invoicesService.findAll();
        return resp.status(HttpStatus.OK).json({ invoices });
    };

    @Get('/:id')
    async findOne(@Param() params, @Res() resp: Response) {
        const id = params.id;
        const invoices = await this.invoicesService.findOne(id);
        return await resp.status(HttpStatus.OK).json({ invoices });
    };

    @Post()
    async create(@Body() createProducDto: CreateInvoiceDto, @Res() resp: Response) {
        const createInvoice = await this.invoicesService.create(createProducDto);
        return await resp.status(HttpStatus.CREATED).json({ createInvoice });
    };

    @Put('/:id')
    async update(@Param('id') id: string, @Body() createInvoiceDto: CreateInvoiceDto, @Res() resp: Response) {
        const updateInvoice = await this.invoicesService.update(id, createInvoiceDto);
        return await resp.status(HttpStatus.OK).json({ updateInvoice });
    };

    @Delete('/:id')
    async delete(@Param('id') id: string, @Res() resp: Response) {
        const deleteInvoice = await this.invoicesService.delete(id);
        return await resp.status(HttpStatus.MOVED_PERMANENTLY).json({ deleteInvoice });
    };


};
