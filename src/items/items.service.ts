import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';


@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    async todosItem(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async unicoItem(id: string): Promise<Item> {
        return await this.itemModel.findById(id);
    };

    async delete(id: string): Promise<Item> {
        const deletItem = await this.itemModel.findById(id);
        return deletItem.remove();
    };
    async create(createItemDto: CreateItemDto){
        const createItem = new this.itemModel(createItemDto);
        return await createItem.save();
        
    };



}
