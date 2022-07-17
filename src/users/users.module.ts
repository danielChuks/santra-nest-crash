import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.model';
 
@Module({
  providers: [UsersService],
  controllers: [UsersController],

  //importing the mongoose schema to the user feature.
  imports: [
    MongooseModule.forFeature([
       {name: 'user', schema:UserSchema} 
      ])
  ]

})
export class UsersModule {}
