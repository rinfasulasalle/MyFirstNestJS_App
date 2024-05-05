import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.UsersService.getUsers();
  }
}
