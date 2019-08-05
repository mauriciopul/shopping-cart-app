import { Controller, Res, Get, HttpStatus, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { InvoicesdetailsService } from './invoicesdetails.service';
import { CreateInvoiceDetailDto } from './dto/create-invoicedetail.dto';

@Controller('invoicedetail')
export class InvoicedetailsController {

    constructor(private readonly invoicedetailsService: InvoicesdetailsService) { };

    @Get()
    async findAll(@Res() resp: Response) {
        const invoicedetails = await this.invoicedetailsService.findAll();
        return resp.status(HttpStatus.OK).json({ invoicedetails });
    };

    @Get('/:id')
    async findOne(@Param() params, @Res() resp: Response) {
        const id = params.id;
        const invoicedetails = await this.invoicedetailsService.findOne(id);
        return await resp.status(HttpStatus.OK).json({ invoicedetails });
    };

    @Post()
    async create(@Body() createInvoiceDetailDto: CreateInvoiceDetailDto, @Res() resp: Response) {
        const createInvoiceDetail = await this.invoicedetailsService.create(createInvoiceDetailDto);
        return await resp.status(HttpStatus.CREATED).json({ createInvoiceDetail });
    };

    @Put('/:id')
    async update(@Param('id') id: string, @Body() createInvoiceDetailDto: CreateInvoiceDetailDto, @Res() resp: Response) {
        const updateInvoiceDetail = await this.invoicedetailsService.update(id, createInvoiceDetailDto);
        return await resp.status(HttpStatus.OK).json({ updateInvoiceDetail });
    };

    @Delete('/:id')
    async delete(@Param('id') id: string, @Res() resp: Response) {
        const deleteInvoiceDetail = await this.invoicedetailsService.delete(id);
        return await resp.status(HttpStatus.MOVED_PERMANENTLY).json({ deleteInvoiceDetail });
    };


};
