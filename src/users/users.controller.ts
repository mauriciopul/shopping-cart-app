import { Controller, Get, Req, Res, HttpStatus, Post } from '@nestjs/common';
import { Request, Response, request, response } from 'express';


@Controller('users')
export class UsersController {

    @Get('/:id/:name')
    findAll1(@Req() request: Request, @Res() response: Response): object {

        const id = request.params.id;
        const name = request.params.name;

        return response.status(HttpStatus.OK).json({ id, name });
    }


    @Post()
    create(@Req() request: Request, @Res() response: Response): object {
        const id = request.body.id;
        const name = request.body.name;

        return response.status(HttpStatus.CREATED).json({ id, name });
    }



}
