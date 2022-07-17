import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { postSchema } from 'src/schema/post.model';
import { UserSchema } from 'src/schema/user.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  controllers: [PostsController],
  providers: [PostsService],

  imports: [
    MongooseModule.forFeature([
      { name: "user", schema: UserSchema},
      { name: "post", schema: postSchema}
    ])
  ]
})
export class PostsModule {}
