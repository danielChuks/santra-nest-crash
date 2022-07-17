import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
import { env } from './utils/env';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MongooseModule.forRoot(env.MONGODB_URI), UsersModule, PostsModule,],
})
export class AppModule {}
