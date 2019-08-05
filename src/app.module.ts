import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/shopping-cart-se'), UsersModule, ProductsModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
