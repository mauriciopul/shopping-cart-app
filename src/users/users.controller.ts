import { Controller, Get, Req, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { };

    @Get('/:id/:name')
    findAll1(@Req() request: Request, @Res() response: Response): object {

        const id = request.params.id;
        const name = request.params.name;

        return response.status(HttpStatus.OK).json({ id, name });
    }

    @Post()
    async create(@Body() CreateUserDto: CreateUserDto, @Res() response: Response) {
        const createdUser = await this.usersService.create(CreateUserDto);
        return response.status(HttpStatus.CREATED).json({createdUser});
    }
}
