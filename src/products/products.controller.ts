import { Controller, Res, Get, HttpStatus, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { };

    @Get()
    async findAll(@Res() resp: Response) {
        const products = await this.productsService.findAll();
        return resp.status(HttpStatus.OK).json({ products });
    };

    @Get('/:id')
    async findOne(@Param() params, @Res() resp: Response) {
        const id = params.id;
        const products = await this.productsService.findOne(id);
        return await resp.status(HttpStatus.OK).json({ products });
    };
    @Get('/codigo/:codigoProd')
    async findOneByCod(@Param() params, @Res() resp: Response) {
        const cod = params.codigoProd;
        await this.productsService.findOneByCod(cod)
        .then( (product)=>{
             resp.status(HttpStatus.OK).json({ product });
          })
          .catch( (error)=>{
            resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });
          });        
    };

    @Post()
    async create(@Body() createProducDto: CreateProductDto, @Res() resp: Response) {
        const createProduct = await this.productsService.create(createProducDto);
        return await resp.status(HttpStatus.CREATED).json({ createProduct });
    };

    @Put('/:id')
    async update(@Param('id') id: string, @Body() createProductDto: CreateProductDto, @Res() resp: Response) {
        const updateProduct = await this.productsService.update(id, createProductDto);
        return await resp.status(HttpStatus.OK).json({ updateProduct });
    };

    @Delete('/:id')
    async delete(@Param('id') id: string, @Res() resp: Response) {
        const deleteProduct = await this.productsService.delete(id);
        return await resp.status(HttpStatus.MOVED_PERMANENTLY).json({ deleteProduct });
    };


};
