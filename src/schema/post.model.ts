import { Prop, Schema, SchemaFactory, } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';


export type postDocument = Post & mongoose.Document


@Schema()
export class Post {
    @Prop({required: true})
    text: string;

    @Prop({required: true})
    createdAt: Date

    @Prop({required: true})
    postedBy: mongoose.Types.ObjectId;

}

export const postSchema = SchemaFactory.createForClass(Post)

