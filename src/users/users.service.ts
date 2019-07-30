import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userModel.findById(id);
    }

    async delete(id: string): Promise<User> {
        const deleteUser = await this.userModel.findById(id)
        return await deleteUser.remove();

    };

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    };

    async update(id: string, createUserDto:CreateUserDto): Promise<User>{
        const updateUser = await this.findOne(id);
        return await updateUser.update(createUserDto);
    };

}
