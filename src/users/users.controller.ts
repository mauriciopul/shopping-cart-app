import { Controller, Get, Res, HttpStatus, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Response} from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { };

    @Get()
    async findAll(@Res() response: Response) {
        const users = await this.usersService.findAll();
        return response.status(HttpStatus.OK).json({ users });
    };

    @Get('/:id')
    async findOne(@Param() params, @Res() res: Response) {
        const id = params.id;
        const users = await this.usersService.findOne(id);
        return res.status(HttpStatus.OK).json({ users });
    };

    @Post()
    async create(@Body() CreateUserDto: CreateUserDto, @Res() response: Response) {
        const createdUser = await this.usersService.create(CreateUserDto);
        return response.status(HttpStatus.CREATED).json({ createdUser });
    };

    @Put('/:id')
    async update(@Param('id') id: string, @Body() CreateUserDto: CreateUserDto, @Res() response: Response) {
        const updateUser = await this.usersService.update(id, CreateUserDto);
        return response.status(HttpStatus.OK).json({ updateUser });
    };
    
    @Delete('/:id')
    async remove(@Param('id') id: string, @Res() response: Response) {
        const deleteUser = await this.usersService.delete(id);
        return response.status(HttpStatus.MOVED_PERMANENTLY).json({deleteUser});
    };










}
















