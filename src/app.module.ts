import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { ComprasController } from './compras/compras.controller';
import { ComprasService } from './compras/compras.service';
import { ComprasModule } from './compras/compras.module';

@Module({
<<<<<<< HEAD
  imports: [
    MongooseModule.forRoot('mongodb://localhost/shopping-cart'),
    UsersModule,
    ItemsModule
  ],
=======
  imports: [MongooseModule.forRoot('mongodb://localhost/shopping-cart'), UsersModule, ItemsModule, ComprasModule],
>>>>>>> bb0816ef7a4748cf681565e4293f9afc46c11478
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
