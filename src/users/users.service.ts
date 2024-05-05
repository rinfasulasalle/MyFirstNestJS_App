import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '112233',
    },
    {
      id: 2,
      name: 'user 2',
      phone: '987654321',
    },
  ];
  getUsers() {
    return this.users;
  }
}
