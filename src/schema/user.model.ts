import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export type UserDocument  = User & Document;

export interface IdObject {
    _id: mongoose.Types.ObjectId,
}

@Schema()
export class User { 
    @Prop({required: true})
    email: string;

    @Prop({require: true})
    username:  string;

    @Prop({require: true})
    password: string 

    @Prop()
    createdAt:  Date

}

export const UserSchema = SchemaFactory.createForClass(User);
