import { Controller, Get, Put, Delete, Post, Param, Body, HttpStatus, Res } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { response } from 'express';

@Controller('items')
export class ItemsController {

@Get()
async todosItems(@Res() response: Response){
    const items = await this.todosItems.todosItems();
    return response.status(HttpStatus.OK).json({items});
}

@Post()

@Put()

@Delete()


}
