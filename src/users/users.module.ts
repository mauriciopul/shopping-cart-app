import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schemas';

@Module({
  imports: [MongooseModule.forFeature([{name: 'user', schema: UserSchema}])],
  controllers: [UsersController]
})
export class UsersModule {}
