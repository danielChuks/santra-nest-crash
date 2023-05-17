import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable({})
export class AuthService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}
}
