import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { InvoiceController } from './invoice/invoice.controller';
import { InvoiceService } from './invoice/invoice.service';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/shopping-cart-se'), 
  UsersModule, ProductsModule, InvoiceModule],
  
  controllers: [AppController, InvoiceController],
  providers: [AppService, InvoiceService],
})
export class AppModule { }
