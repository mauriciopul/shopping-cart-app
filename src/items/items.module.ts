import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemSchema } from './schemas/item.schemas';
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Item', schema: ItemSchema}])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule { }
