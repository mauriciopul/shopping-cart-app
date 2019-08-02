import { Controller, Get, Put, Delete, Post, Param, Body, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { };

    @Get()
    async todosItem(@Res() response: Response) {
        const items = await this.itemsService.todosItem();
        return response.status(HttpStatus.OK).json({ items });
    };

    @Get('/:id')
    async unicoItem(@Param() params, @Res() response: Response) {
        const id = params.id;
        const items = await this.itemsService.unicoItem(id);
        return response.status(HttpStatus.OK).json({ items });
    };

    @Post()
    async create(@Body() CreateItemDto: CreateItemDto, @Res() response: Response) {
        const createItem = await this.itemsService.create(CreateItemDto);
        return response.status(HttpStatus.CREATED).json(CreateItemDto);
    };

    @Put('/:id')
    async update(@Param('id') id: string, @Body() CreateItemDto: CreateItemDto, @Res() response: Response) {
        const updateItem = await this.itemsService.update(id, CreateItemDto);
        return response.status(HttpStatus.CREATED).json({ updateItem });
    };

    @Delete('/:id')
    async remove(@Param('id') id: string, @Res() res: Response) {
        const deleteItem = await this.itemsService.delete(id);
        return res.status(HttpStatus.MOVED_PERMANENTLY).json(deleteItem);

    };


};
