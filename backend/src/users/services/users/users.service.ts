import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'users', email: 'password@gmail.com' },
    { username: 'users', email: 'password@gmail.com' },
    { username: 'users', email: 'password@gmail.com' },
  ];
  fetchAllUsers() {
    return this.fakeUsers;
  }

  createUsers(userDetails: CreateUserType) {
    return this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: number) {
    return { id, username: 'vincent', email: 'vincent@gmail.com' };
  }
}
