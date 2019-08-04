import { Controller, Get, SetMetadata, Post, Put, Delete, Body, Res, Param, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ComprasService } from './compras.service';
import { CreateCompraDto } from './dto/create-compra-dto';

@Controller('compras')
export class ComprasController {

    constructor(private readonly comprasService: ComprasService) { };

    @Get()
    async allCompras(@Res() resp: Response) {
        const compras = await this.comprasService.allCompras();
        return resp.status(HttpStatus.OK).json({ compras });
    };

    @Get('/:id')
    async unaCompra(@Param() params, @Res() resp: Response) {
        const id = params.id;
        const compras = await this.comprasService.unaCompra(id);
        return resp.status(HttpStatus.OK).json({ compras });
    };

    @Post()
    async create(@Body() crearCompraDTO: CreateCompraDto, @Res() resp: Response) {
        const crearCompra = await this.comprasService.create(crearCompraDTO);
        return resp.status(HttpStatus.CREATED).json({ crearCompra });
    }

    @Put('/:id')
    async update(@Param('id') id: string, @Body() createCompraDto: CreateCompraDto, @Res() resp: Response) {
        const updateCompra = await this.comprasService.update(id, createCompraDto);
        return resp.status(HttpStatus.OK).json(updateCompra);
    }

    @Delete('/:id')
    async remove(@Param('id') id: string, @Res() resp: Response) {
        const deleteCompra = await this.comprasService.delete(id);
        return resp.status(HttpStatus.MOVED_PERMANENTLY).json({ deleteCompra });
    }

}
