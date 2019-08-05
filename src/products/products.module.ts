import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductSchema } from './schemas/product.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
