import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  getUsers() {
    return this.UsersService.getUsers();
  }

  @Post()
  createUser() {
    return this.UsersService.createtUser();
  }

  @Put()
  updateUser() {
    return this.UsersService.updateUser();
  }

  @Patch()
  updateUserStatus() {
    return this.UsersService.updateUserStatus();
  }

  @Delete()
  DeleteUser() {
    return this.UsersService.deleteUser();
  }
}
