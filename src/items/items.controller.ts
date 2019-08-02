import { Controller, Get, Put, Delete, Post, Param, Body, HttpStatus, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { };

    @Get()
    async todosItem(@Res() response: Response) {
        const items = await this.itemsService.todosItem();
        return response.status(HttpStatus.OK).json({ items });
        //   return 'todos los items';
    };

    @Post()
    async create(@Body() CreateItemDto: CreateItemDto, @Res() response:Response){
        const createItem = await this.itemsService.create(CreateItemDto);
        return response.status(HttpStatus.CREATED).json(CreateItemDto);
    }

    /*
    @Put()

    @Delete()
*/

};
