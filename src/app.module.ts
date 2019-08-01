import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/shopping-cart'), UsersModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

