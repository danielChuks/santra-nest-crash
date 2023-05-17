import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { model } from 'mongoose';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I have signed up' };
  }
  signin() {
    return { msg: 'I have signed in' };
  }
}
