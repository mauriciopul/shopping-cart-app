import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
